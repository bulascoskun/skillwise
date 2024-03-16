import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';

export const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  const userInfo = {
    name: user.name,
    username: user.username,
    email: user.email,
    location: user.location,
    role: user.role,
  };
  res.status(StatusCodes.OK).json(userInfo);
};

export const updateUser = async (req, res) => {
  const updatedParams = { ...req.body };
  delete updatedParams.password;
  delete updatedParams.role;

  const updatedUser = await User.findByIdAndUpdate(
    req.user.userId,
    updatedParams
  );

  res.status(StatusCodes.OK).json({ msg: 'User updated' });
};
