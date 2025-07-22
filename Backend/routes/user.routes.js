import { Router } from 'express';
import { body } from 'express-validator';
import * as userController from '../controllers/user.controller.js';
import * as authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

const validateAuthFields = [
  body('email').isEmail().withMessage('Email must be a valid email address'),
  body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
];

router.post('/register', validateAuthFields, userController.createUserController);
router.post('/login', validateAuthFields, userController.loginController);
router.get('/profile', authMiddleware.authUser, userController.profileController);
router.get('/logout', authMiddleware.authUser, userController.logoutController);
router.get('/all', authMiddleware.authUser, userController.getAllUsersController);

export default router;
