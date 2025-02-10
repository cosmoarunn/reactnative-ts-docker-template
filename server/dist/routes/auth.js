"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server/src/routes/auth.ts
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController"); // Import your controller functions
const router = express_1.default.Router();
router.post('/register', authController_1.register); // Route for user registration
router.post('/login', authController_1.login); // Route for user login
exports.default = router;
