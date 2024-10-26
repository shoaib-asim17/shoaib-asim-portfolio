"use client"; // Ensure this line is present for client-side rendering

import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]); // State to store projects
  const [error, setError] = useState(null); // State to store error messages
  const userId = 'unique_user_id'; // Replace with actual user ID logic

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/projects'); // Fetch projects from backend
        setProjects(response.data); // Set the fetched projects to state
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to fetch projects. Please try again later.'); // Set error message
      }
    };

    fetchProjects(); // Call fetch function on component mount
  }, []);

  const handleLike = async (id) => {
    try {
      const response = await axios.post(`http://localhost:5000/projects/${id}/like`, { userId }); // Like project
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project._id === id ? { ...project, likes: response.data.likes } : project // Update likes
        )
      );
    } catch (error) {
      console.error('Error liking project:', error);
      alert(error.response?.data?.message || 'An error occurred. Please try again.'); // Show error alert
    }
  };

  if (error) {
    return <p>{error}</p>; // Display error message if there is one
  }

  return (
    <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.length === 0 ? (
        <p>No projects available.</p> // Show message if no projects
      ) : (
        projects.map((project) => (
          <div key={project._id} className="project-card border rounded-lg shadow-md p-4 flex flex-col">
            {project.img && (
              <img src={project.img} alt={project.title} className="rounded-t-lg mb-4" />
            )}
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <p className="mb-2">Likes: {project.likes}</p>
            <button
              onClick={() => handleLike(project._id)}
              className="bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200"
              disabled={project.likedBy.includes(userId)} // Disable button if user has already liked
            >
              {project.likedBy.includes(userId) ? 'Liked' : 'Like'}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Projects;
