import Courses from '../models/Courses.js';

class SiteController {
  // [GET] /news
  async home(req, res) {
    try {
      const courses = await Courses.find({});
      res.json(courses);
    } catch (err) {
      console.error(err);
    }
  }
}

export default new SiteController();
