import express from 'express';

const v1Router = express.Router();

v1Router.get('/', (req, res) => {
  res.send('Welcome to gl-classification backend applicaiton.');
});

export default v1Router;