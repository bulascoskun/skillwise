import { Router } from 'express';
const router = Router();

import {
  getAllCourses,
  getSingleCourse,
} from '../controllers/courseController.js';
import { getSubscribedCourses } from '../controllers/subscribeController.js';

router.route('/').get(getAllCourses);

router.route('/mycourses').get(getSubscribedCourses);

router.route('/:id').get(getSingleCourse);

export default router;
