import express from 'express';
import upload from './routes/upload';
import glCode from './routes/gl-code';


const v1Router = express.Router();

v1Router.use('/upload', upload)
v1Router.use('/gl-code', glCode)


export default v1Router;