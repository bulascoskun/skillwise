import { Router } from 'express';
const router = Router();

import {
  getAllBooks,
  placeOrder,
  getSingleBook,
  getMyOrders,
} from '../controllers/bookController.js';

router.route('/').get(getAllBooks);

router.route('/cart').post(placeOrder);

router.route('/myorders').get(getMyOrders);

router.route('/:id').get(getSingleBook);

export default router;
