import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/customErrors.js';

import Subscription from '../models/SubscriptionModel.js';
import mongoose from 'mongoose';

export const subscribe = async (req, res) => {
  const userId = req.user.userId;
  const bookId = req.params.id;

  try {
    const subscription = new Subscription({
      user_id: userId,
      course_id: bookId,
    });
    const response = await subscription.save();
    res.status(StatusCodes.CREATED).json(response);
  } catch (error) {
    throw new BadRequestError('User already subsribed to the course.');
  }
};

export const checkSubscription = async (req, res) => {
  const userId = req.user.userId;
  const bookId = req.params.id;

  const subscription = await Subscription.findOne({
    user_id: userId,
    course_id: bookId,
  });

  const isSubscribed = subscription ? true : false;

  res.status(StatusCodes.CREATED).json(isSubscribed);
};

export const getSubscribedCourses = async (req, res) => {
  const userId = req.user.userId;

  const subscribedCourses = await Subscription.aggregate([
    {
      $match: {
        user_id: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: 'courses',
        localField: 'course_id',
        foreignField: '_id',
        as: 'course_info',
      },
    },
    {
      $unwind: '$course_info',
    },
    {
      $project: {
        createdAt: 1,
        'course_info.title': 1,
        'course_info._id': 1,
      },
    },
  ]).sort('-createdAt');

  res.status(StatusCodes.CREATED).json(subscribedCourses);
};
