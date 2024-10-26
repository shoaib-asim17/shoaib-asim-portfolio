// api/projects.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Project from '../models/Project.js'; // Adjust the path as necessary

dotenv.config();
const app = express();

// Configure CORS to allow requests from your React app
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? 'https://shoaib-asim.vercel.app' : 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route to get all projects
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to like a specific project
app.post('/projects/:id/like', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    const userId = req.body.userId; // Get user ID from request body

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Check if the user has already liked the project
    if (project.likedBy.includes(userId)) {
      return res.status(400).json({ message: 'You have already liked this project' });
    }

    // Increment likes and add user to likedBy array
    project.likes += 1;
    project.likedBy.push(userId); // Add user ID to likedBy array
    await project.save();
    
    res.json({ likes: project.likes });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).json({ message: 'Something went wrong!' }); // Respond with a 500 status
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
