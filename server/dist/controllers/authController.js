"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with a strong secret
const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if user already exists
        const existingUser = await User_1.User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        // Create the new user
        const newUser = await User_1.User.create({
            username, password: hashedPassword,
            id: 0
        });
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Find the user
        const user = await User_1.User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Compare passwords
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Create and sign a JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' }); // Adjust expiration as needed
        res.json({ token, user: { id: user.id, username: user.username } }); // Send the token to the client
    }
    catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.login = login;
