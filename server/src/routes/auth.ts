// server/src/routes/auth.ts
import express from 'express';
import { register, login, getAllUsers } from '../controllers/authController'; // Import your controller functions

const router = express.Router();
router.get('/users', getAllUsers);
router.post('/signup', register); // Route for user registration
router.post('/login', login);   // Route for user login

export default router;