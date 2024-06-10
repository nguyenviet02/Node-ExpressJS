import newsRouter from './news.route.js';
import siteRouter from './site.route.js';

const route = (app) => {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
};
export default route;
