import express from 'express';

const routerApi = express.Router();

routerApi.get('/', (req, res) => {
  res.render('Layout');
});

export default routerApi;
