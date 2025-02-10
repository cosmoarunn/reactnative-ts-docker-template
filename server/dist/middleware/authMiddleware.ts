// backend/src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with your actual secret

interface AuthRequest extends Request {
  user?: { userId: number }; // Add user property to the Request interface
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Get token from header

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number }; // Verify token
    req.user = { userId: decoded.userId }; // Add user ID to request object
    next(); // Continue to the next middleware/route handler
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};