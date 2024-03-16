import 'express-async-errors';
import express from 'express';
const app = express();
import 'dotenv/config';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

// routers
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import bookRouter from './routes/bookRouter.js';
import courseRouter from './routes/courseRouter.js';
import subscribeRouter from './routes/subscribeRouter.js';

// public
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', authenticateUser, userRouter);
app.use('/api/v1/books', authenticateUser, bookRouter);
app.use('/api/v1/courses', authenticateUser, courseRouter);
app.use('/api/v1/subscribe', authenticateUser, subscribeRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not found' });
});

app.use(errorHandlerMiddleware);

// STARTING SERVER
const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
