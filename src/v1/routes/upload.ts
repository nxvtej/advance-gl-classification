import express  from "express";
import cors from "cors";
import {z} from 'zod'
import download from "../../lib/download";


const upload = express.Router();
const schema = z.object({
    url: z.string().url()!,
    companyName: z.string(),
})

upload.get('/',async (req, res) => {
    // res.send('You are using v1-gl-classification backend application');
    const body = req.body;
    const result = schema.safeParse(body);

    if(result.success){
        const {url, companyName} = result.data;
        const downloadStatus = await download(url, companyName);
        res.send({
            "message": "folder downloaded successfully"
        })
        return ;
    }
    else {
        res.send({
            "message":"validation failed schema ({url:url, companyName:string});"
        })
        return ;
    }
})

export default upload;