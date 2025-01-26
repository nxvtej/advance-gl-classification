import express from 'express';
import v1Router from './v1/index';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to gl-classification backend applicaiton.');
});

app.use('/v1', v1Router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})