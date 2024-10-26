import express from 'express';
import Project from '../models/Project.js'; // Adjust the path as necessary

const router = express.Router();

// Route to get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Route to like a specific project
router.post('/:id/like', async (req, res) => {
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
    console.error('Error liking project:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Export the router
export default router;
