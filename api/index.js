import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import projectRoutes from './projects.js'; // Ensure this path is correct

// Load environment variables from .env file
dotenv.config();

const app = express();

// Configure CORS to allow requests from any origin
app.use(cors()); // Allows all origins

app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err; // Rethrow to handle it in the serverless function
  }
};

// Use project routes
app.use('/api/projects', projectRoutes);

// Serverless function handler
export default async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  await connectDB(); // Ensure DB connection

  // Handle the request with the Express app
  app(req, res);
};
