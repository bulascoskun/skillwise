import { body, param, validationResult } from 'express-validator';
import User from '../models/UserModel.js';

import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../errors/customErrors.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith('no job')) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError(errorMessages);
        }
        throw new BadRequestError(errorMessages.join(' '));
      }
      next();
    },
  ];
};

export const validateRegisterInput = withValidationErrors([
  body('name')
    .notEmpty()
    .withMessage('Name is required.')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long.'),

  body('username')
    .notEmpty()
    .withMessage('Username is required.')
    .custom(async (username) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new BadRequestError('Username already exists.');
      }
    }),

  body('email')
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Invalid email format.')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('Email already exists.');
      }
    }),

  body('password')
    .notEmpty()
    .withMessage('Password is required.')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long.'),
]);

export const validateLoginInput = withValidationErrors([
  body('password').notEmpty().withMessage('Password is required.'),
  body('email')
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Invalid email format.'),
]);

export const validateUpdateUser = withValidationErrors([
  body('username')
    .notEmpty()
    .withMessage('Username is required.')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('Username already exists');
      }
    }),

  body('email')
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Invalid email format.')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('Email already exists');
      }
    }),
]);
