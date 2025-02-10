// backend/src/routes/billing.ts
import express from 'express';
import { getInvoices, createInvoice } from '../controllers/billingController'; // Import your controller functions
import { authenticate } from '../middleware/authMiddleware'; // Import your authentication middleware

const router = express.Router();

router.get('/invoices', authenticate, getInvoices); // Route to get invoices (protected)
router.post('/invoices', authenticate, createInvoice); // Route to create an invoice (protected)

export default router;