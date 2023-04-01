import express from 'express';
import morgan from 'morgan';
import path from 'path';
import renderRouter from './routes/renderRouter';
import apiRouter from './routes/apiRouter';
import jsxRender from './utils/jsxRender';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

// app.use(cors({ origin: true, credentials: true }));
app.use(express.static('public'));
app.use(morgan('dev'));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

// app.get('/', (req, res) => {
//   const initState = { hello: 'world' };
//   res.render('Layout', initState);
// });

app.use('/', renderRouter);
app.use('/', apiRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
