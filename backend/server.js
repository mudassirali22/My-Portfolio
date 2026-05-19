import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendContactEmail } from './controllers/emailController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables locally
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React app can communicate with the backend
app.use(cors({
  origin: ['http://localhost:3000', process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// Base health check route
app.get('/', (req, res) => {
  res.send('Portfolio Backend API is running securely.');
});

// Main contact API endpoint
app.post('/api/contact', sendContactEmail);

// Start server locally (Vercel Serverless will ignore this and use the exported app)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Portfolio backend is  listening on port ${PORT}`);
  });
}

// Export for Vercel Serverless Functions
export default app;
