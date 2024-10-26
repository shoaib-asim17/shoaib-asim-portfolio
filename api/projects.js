import mongoose from 'mongoose';
import Project from '../models/Project'; // Ensure Project.js is properly defined
import Cors from 'cors';

const cors = Cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://shoaib-asim.vercel.app' : 'http://localhost:3000', // Update with your production URL
  methods: ['GET', 'POST'],
});

// Connect to MongoDB once
let isConnected = false;

const connectToDatabase = async () => {
  if (!isConnected) {
    try {
      console.log('Connecting to MongoDB...');
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isConnected = true;
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw new Error('Database connection failed');
    }
  }
};

// Helper method to run middleware (CORS in this case)
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

// Main API handler
export default async function handler(req, res) {
  // Ensure MongoDB connection
  await connectToDatabase();

  // Run CORS middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'GET') {
    try {
      const projects = await Project.find();
      console.log('Fetched projects:', projects); // Log fetched projects
      res.status(200).json(projects);
    } catch (err) {
      console.error('Error fetching projects:', err);
      res.status(500).json({ message: 'Server error: Unable to fetch projects' });
    }
  } else if (req.method === 'POST') {
    const { id } = req.query;

    if (id && req.url.includes('like')) {
      try {
        const project = await Project.findById(id);
        const userId = req.body.userId;

        if (!project) {
          return res.status(404).json({ message: 'Project not found' });
        }

        if (project.likedBy.includes(userId)) {
          return res.status(400).json({ message: 'You have already liked this project' });
        }

        project.likes += 1;
        project.likedBy.push(userId);
        await project.save();

        res.status(200).json({ likes: project.likes });
      } catch (err) {
        console.error('Error liking project:', err);
        res.status(500).json({ message: 'Server error: Unable to like project' });
      }
    } else {
      res.status(400).json({ message: 'Invalid endpoint or missing project ID' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
