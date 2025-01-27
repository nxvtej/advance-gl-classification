import * as path from 'path';
import fs from 'fs'
import axios from 'axios'
import { error } from 'console';

export default async function download(url: string, companyName:string): Promise<boolean> {

    const fileName = path.basename(url);
    const targetDir = path.join(__dirname,'..','files',  companyName)
    const filePath = path.join(targetDir, fileName);

    console.log(filePath);

    try {

        // first make sure that the file exists
        fs.mkdirSync(targetDir, {recursive: true});

        const response = await axios({
            method: 'get',
            url:url,
            responseType: 'stream'
        })

        const writer = fs.createWriteStream(filePath);

        return new Promise((resolve, reject)=>{

            response.data.pipe(writer);
            writer.on('finish',()=>{
                console.log(`File downloaded to ${filePath}`)
                resolve(true);
            })

            writer.on('error', ()=>{
                console.log(`error downloading file via url ${url}`);
                fs.unlinkSync(filePath);
                reject(error);
            })

        })
        
    }  catch(e){
        console.error("Download failed ",e);
        return new Promise((resolve, reject)=>{
            reject(e)
        });
    }

};