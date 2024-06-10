import express from 'express';
const courseRouter = express.Router();
import courseController from '../app/controllers/CourseController.js';

courseRouter.get('/:slug', courseController.show);
courseRouter.get('/', courseController.index);

export default courseRouter;
