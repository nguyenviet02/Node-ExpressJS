import Courses from '../models/Courses.js';

class CourseController {
  // [GET] /courses
  async index(req, res) {
    const courses = await Courses.find({}).lean();
    res.render('courses', { courses });
  }

  show(req, res) {
    const { slug } = req?.params;
    res.send(slug);
  }
}

export default new CourseController();
