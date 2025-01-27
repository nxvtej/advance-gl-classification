import express from 'express';
import v1Router from './v1/index';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to classificatio.');
});

app.use('/api/v1', v1Router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})