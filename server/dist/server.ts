// backend/src/server.ts
import app from './app.js'; // Import the Express app
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5100;

app.listen(port, () => console.log(`Server running on port ${port}`));

