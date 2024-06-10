import express from 'express';
import path from 'path';
const __dirname = path.resolve();
import { engine } from 'express-handlebars';

import route from './routes/index.js';

import db from './config/db/index.js';
// Connect to DB
db.connect();

const app = express();

app.engine('.hbs', engine({ extname: 'hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Route
route(app);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
