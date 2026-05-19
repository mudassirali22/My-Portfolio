import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendContactEmail } from './controllers/emailController.js';

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

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Portfolio backend is listening on port ${PORT}`);
  });
}

// Export for Vercel Serverless Functions
export default app;
