import { Router } from 'express';
const router = Router();

import { getCurrentUser, updateUser } from '../controllers/userController.js';
import { validateUpdateUser } from '../middleware/validationMiddleware.js';

router.route('/').get(getCurrentUser);
router.route('/').patch(validateUpdateUser, updateUser);

export default router;
