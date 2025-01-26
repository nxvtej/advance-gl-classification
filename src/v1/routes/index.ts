import express  from "express";
import cors from "cors";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('You are using v1-gl-classification backend application');
})

export default router;