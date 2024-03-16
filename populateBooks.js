import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Book from './models/BookModel.js';

try {
  await mongoose.connect(process.env.MONGO_URL);
  const jsonBooks = JSON.parse(
    await readFile(new URL('./utils/mockBooks.json', import.meta.url))
  );
  await Book.create(jsonBooks);
  console.log('success');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
