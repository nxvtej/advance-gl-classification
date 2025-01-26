import express from 'express';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to gl-classification backend applicaiton.');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})