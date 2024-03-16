import { Router } from 'express';
import {
  checkSubscription,
  subscribe,
} from '../controllers/subscribeController.js';

const router = Router();

router.route('/:id').post(subscribe).get(checkSubscription);

export default router;
