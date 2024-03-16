import { StatusCodes } from 'http-status-codes';
import Course from '../models/CourseModel.js';
import { NotFoundError } from '../errors/customErrors.js';

export const getAllCourses = async (req, res) => {
  const { search, category } = req.query;
  let queryObject = {};

  if (search) {
    queryObject.$or = [
      { title: { $regex: search, $options: 'i' } },
      { lecturer: { $regex: search, $options: 'i' } },
    ];
  }

  if (category && category !== 'all') {
    queryObject.category = category;
  }

  // pagination
  const page = Number(req.query.page) || 1;
  const limit = 8;
  const skip = (page - 1) * limit;

  const totalCourses = await Course.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalCourses / limit);

  const courses = await Course.find(queryObject).skip(skip).limit(limit);

  res.status(StatusCodes.OK).json({ currentPage: page, numOfPages, courses });
};

export const getSingleCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findOne({ _id: id });
    res.status(StatusCodes.OK).json(course);
  } catch (error) {
    throw new NotFoundError(`No course with id ${id}`);
  }
};
