import express from 'express';

const renderRouter = express.Router();

renderRouter.get('/', (req, res) => {
  res.render('Layout');
});

export default renderRouter;



