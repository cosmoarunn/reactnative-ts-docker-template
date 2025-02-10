// backend/src/app.ts
import express from 'express';
import cors from 'cors';
import db, {connect} from './config/db'; // Import your database connection
import authRoutes from './routes/auth';
import serverRoutes from './routes/servers';
import billingRoutes from './routes/billing';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/servers', serverRoutes);
app.use('/api/billing', billingRoutes);

connect()
  .then((res) => console.log('Database connected'))
  .catch((err: any) => console.error('Database connection error:', err));

export default app;