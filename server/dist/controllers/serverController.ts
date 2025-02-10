// backend/src/controllers/serverController.ts
import { Request, Response } from 'express';
import { Server } from '../models/Server'; // Import your Server model

export const getServers = async (req: Request, res: Response) => {
    const {  userId } = req.body;
  try {
    const servers = await Server.findAll({ where: { userId } }); // Fetch servers associated with the authenticated user
    res.json(servers);
  } catch (error) {
    console.error('Error fetching servers:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createServer = async (req: Request, res: Response) => {
    const userId = 1;  //get active user
  try {
    const {  name, status, region } = req.body; // Extract data from request body
    const newServer = await Server.create({
        name,
        status,
        region,
        userId,
        id: 0
    });
    res.status(201).json(newServer); // Send the newly created server in the response
  } catch (error) {
    console.error('Error creating server:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getServerById = async (req: Request, res: Response) => {
  try {
    const serverId = req.params.id;
    const server = await Server.findByPk(serverId);
    if (!server) {
      return res.status(404).json({ message: 'Server not found' });
    }
    res.json(server);
  } catch (error) {
    console.error('Error fetching server by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateServer = async (req: Request, res: Response) => {
  try {
    const serverId = req.params.id;
    const { name, status, region } = req.body;
    const server = await Server.findByPk(serverId);
    if (!server) {
      return res.status(404).json({ message: 'Server not found' });
    }
    await server.update({ name, status, region });
    res.json(server);
  } catch (error) {
    console.error('Error updating server:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteServer = async (req: Request, res: Response) => {
  try {
    const serverId = req.params.id;
    const server = await Server.findByPk(serverId);
    if (!server) {
      return res.status(404).json({ message: 'Server not found' });
    }
    await server.destroy();
    res.status(204).end(); // 204 No Content
  } catch (error) {
    console.error('Error deleting server:', error);
    res.status(500).json({ message: 'Server error' });
  }
};