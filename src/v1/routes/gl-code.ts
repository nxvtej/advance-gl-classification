import express from 'express'

const glCode = express.Router();
glCode.use(express.json());

glCode.get('/', (req, res) => {
    const { glCode, companyName} = req.body();
})

export default glCode;