import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Course from './models/CourseModel.js';

try {
  await mongoose.connect(process.env.MONGO_URL);
  const jsonCourses = JSON.parse(
    await readFile(new URL('./utils/mockCourses.json', import.meta.url))
  );
  await Course.create(jsonCourses);
  console.log('success');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
