// seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js'; // Adjust for the correct path

// Load environment variables from .env file
dotenv.config();

// Print the MongoDB URI to the console for debugging
console.log('MONGO_URI:', process.env.MONGO_URI);

// Sample project data
const sampleProjects = [
  {
    title: "DAA LAB-Programs",
    description: "daa programs",
    techs: ["Java"],
    img: "./images/shoaibPortfolio.jpeg",
    link: "https://github.com/shoaib-asim17/DaaPrograms.git",
    likes: 0,
    likedBy: []
  },
  {
    title: "Personal Portfolio",
    description: "Professional page for personal portfolio showcase.",
    techs: ["Tailwind", "JS", "Vite"],
    img: "./images/shoaibPortfolio.jpeg",
    link: "https://github.com/shoaib-asim17/AsimTechZenith",
    likes: 0,
    likedBy: []
  },
  {
    title: "Python Projects",
    description: "Projects in Python.",
    techs: ["Python"],
    img: "./images/csiblog.jpeg",
    link: "https://github.com/shoaib-asim17/python-projects",
    likes: 0,
    likedBy: []
  },
  {
    title: "CSI Blog",
    description: "CSI Blogging website.",
    techs: ["HTML", "CSS", "JS", "MongoDB"],
    img: "./images/csiblog.jpeg",
    link: "https://github.com/shoaib-asim17/CSI_Blog",
    likes: 0,
    likedBy: []
  },
];

// Main function to run the script
const run = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing projects (optional)
    await Project.deleteMany();

    // Log before inserting sample projects
    console.log('Attempting to insert sample projects...');
    const result = await Project.insertMany(sampleProjects);

    // Log the result of the insertion
    console.log('Sample projects added:', result);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the MongoDB connection
    await mongoose.connection.close();
  }
};

// Execute the main function
run();
