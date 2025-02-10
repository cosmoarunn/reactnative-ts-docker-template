// backend/src/routes/servers.ts
import express from 'express';
import { 
  getServers, 
  createServer, 
  getServerById, 
  updateServer, 
  deleteServer 
} from '../controllers/serverController'; // Import your controller functions
import { authenticate } from '../middleware/authMiddleware'; // Import your authentication middleware


const router = express.Router();

router.get('/', authenticate, getServers); // Route to get all servers (protected)
router.post('/', authenticate, createServer); // Route to create a new server (protected)
router.get('/:id', authenticate, getServerById); // Route to get a specific server by ID (protected)
router.put('/:id', authenticate, updateServer); // Route to update a server (protected)
router.delete('/:id', authenticate, deleteServer); // Route to delete a server (protected)

export default router;