import newsRouter from './news.route.js';
import siteRouter from './site.route.js';
import courseRouter from './courses.route.js';

const route = (app) => {
  app.use('/news', newsRouter);
  app.use('/courses', courseRouter);
  app.use('/', siteRouter);
};
export default route;
