import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';

import route from './routes/index.js';

const app = express();

app.engine('.hbs', engine({ extname: 'hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/views');

// Route
route(app);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
