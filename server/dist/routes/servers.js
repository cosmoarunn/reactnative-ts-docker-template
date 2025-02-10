"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/routes/servers.ts
const express_1 = __importDefault(require("express"));
const serverController_1 = require("../controllers/serverController"); // Import your controller functions
const authMiddleware_1 = require("../middleware/authMiddleware"); // Import your authentication middleware
const router = express_1.default.Router();
router.get('/', authMiddleware_1.authenticate, serverController_1.getServers); // Route to get all servers (protected)
router.post('/', authMiddleware_1.authenticate, serverController_1.createServer); // Route to create a new server (protected)
router.get('/:id', authMiddleware_1.authenticate, serverController_1.getServerById); // Route to get a specific server by ID (protected)
router.put('/:id', authMiddleware_1.authenticate, serverController_1.updateServer); // Route to update a server (protected)
router.delete('/:id', authMiddleware_1.authenticate, serverController_1.deleteServer); // Route to delete a server (protected)
exports.default = router;
