require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Project = require("./models/Project"); // Ensure correct import path

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "";
if (!MONGO_URI) {
  console.error("Error: MONGO_URI environment variable is not set.");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// API Endpoints

// Fetch all projects
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ message: "Failed to fetch projects." });
  }
});

// Add a new project
app.post("/projects", async (req, res) => {
  const { title, description, imageUrl, githubLink } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required." });
  }

  try {
    const project = new Project({ title, description, imageUrl, githubLink });
    await project.save();
    res.status(201).json({ message: "Project created successfully.", project });
  } catch (err) {
    console.error("Error creating project:", err);
    res.status(500).json({ message: "Failed to create project." });
  }
});

// Like a project
app.post("/projects/:id/like", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required to like a project." });
  }

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid project ID." });
  }

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }

    if (project.likedBy.includes(userId)) {
      return res.status(400).json({ message: "You have already liked this project." });
    }

    project.likes += 1;
    project.likedBy.push(userId);
    await project.save();

    res.json({ message: "Project liked successfully.", likes: project.likes, likedBy: project.likedBy });
  } catch (err) {
    console.error("Error liking project:", err);
    res.status(500).json({ message: "Failed to like the project." });
  }
});

// Initialize sample projects if specified in .env file
const insertSampleProjects = async () => {
  try {
    await Project.deleteMany(); // Clear existing projects
    await Project.insertMany([
      {
        title: "CSI Blog",
        description: "This is the CSI blog.",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQGnnNbZ1eZTRQ/company-logo_200_200/company-logo_200_200/0/1704048167269?e=2147483647&v=beta&t=u4bogJin8YCOW6WeDBBGj5zB8vhKDIMPOIIRf1oKiRs",
        githubLink: "https://github.com/shoaib-asim17?tab=repositories",
      },
      {
        title: "Notes-app",
        description: "This is the notes app which covers all CRUD operations.",
        imageUrl: "https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX",  // Replace with real image URL
        githubLink: "https://github.com/shoaib-asim17?tab=repositories",
      },
      {
        title: "Chat App",
        description: "This is the chat app which allows real-time communication.",
        imageUrl: "https://cdn.dribbble.com/users/17323/screenshots/822440/chatapp-ios-icon.png",  // Replace with real image URL
        githubLink: "https://github.com/shoaib-asim17?tab=repositories",
      },
    ]);
    console.log("Sample projects added");
  } catch (err) {
    console.error("Error inserting sample projects:", err);
  }
};

// Check for environment variable to insert sample projects
if (process.env.INSERT_SAMPLE === "true") {
  insertSampleProjects();
}

// Root route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Projects API!");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
