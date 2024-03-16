import { StatusCodes } from 'http-status-codes';
import Book from '../models/BookModel.js';
import { NotFoundError } from '../errors/customErrors.js';
import Order from '../models/OrderModel.js';

export const getAllBooks = async (req, res) => {
  const { search, sort, category } = req.query;
  let queryObject = {};

  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: 'i' } },
      { author: { $regex: search, $options: 'i' } },
    ];
  }

  if (category && category !== 'all') {
    queryObject.category = category;
  }

  const sortOptions = {
    latest: '-createdAt',
    oldest: 'createdAt',
    popular: 'sold',
  };
  const sortKey = sortOptions[sort] || sortOptions.latest;

  // pagination
  const page = Number(req.query.page) || 1;
  const limit = 12;
  const skip = (page - 1) * limit;

  const books = await Book.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalBooks = await Book.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalBooks / limit);

  const newestBooks = await Book.find().sort('-createdAt').limit(3);
  const popularBooks = await Book.find().sort('-sold').limit(3);

  res
    .status(StatusCodes.OK)
    .json({ currentPage: page, numOfPages, books, newestBooks, popularBooks });
};

export const getSingleBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({ _id: id });
    res.status(StatusCodes.OK).json(book);
  } catch (error) {
    throw new NotFoundError(`No book with id ${id}`);
  }
};

export const placeOrder = async (req, res) => {
  const orderData = req.body;
  const { userId } = req.user;

  const order = await Order.create({ ...orderData, userId });

  res.status(StatusCodes.CREATED).json(order);
};

export const getMyOrders = async (req, res) => {
  const { userId } = req.user;
  const userOrders = await Order.find({ userId: userId }).sort('-createdAt');

  res.status(StatusCodes.OK).json(userOrders);
};
