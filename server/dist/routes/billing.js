"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/routes/billing.ts
const express_1 = __importDefault(require("express"));
const billingController_1 = require("../controllers/billingController"); // Import your controller functions
const authMiddleware_1 = require("../middleware/authMiddleware"); // Import your authentication middleware
const router = express_1.default.Router();
router.get('/invoices', authMiddleware_1.authenticate, billingController_1.getInvoices); // Route to get invoices (protected)
router.post('/invoices', authMiddleware_1.authenticate, billingController_1.createInvoice); // Route to create an invoice (protected)
exports.default = router;
