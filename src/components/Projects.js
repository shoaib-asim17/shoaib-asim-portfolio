"use client"; // Ensure this line is present for client-side rendering

import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]); // State to store projects
  const [error, setError] = useState(null); // State to store error messages
  const userId = 'unique_user_id'; // Replace with actual user ID logic

  // Using an environment variable for the API URL
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // Function to fetch projects from the API
    const fetchProjects = async () => {
      console.log('Fetching projects from:', `${API_URL}/projects`); // Log the API URL for debugging
      try {
        const response = await axios.get(`${API_URL}/projects`); // Fetch projects from backend
        setProjects(response.data); // Set the fetched projects to state
      } catch (error) {
        console.error('Error fetching projects:', error); // Log the error
        console.error('Response data:', error.response?.data); // Log response data if available
        setError('Failed to fetch projects. Please try again later.'); // Set error message
      }
    };

    fetchProjects(); // Call fetch function on component mount
  }, [API_URL]); // Dependency array ensures this effect runs only once unless API_URL changes

  // Function to handle liking a project
  const handleLike = async (id) => {
    try {
      const response = await axios.post(`${API_URL}/projects/${id}/like`, { userId }); // Like project
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project._id === id
            ? { ...project, likes: response.data.likes, likedBy: [...project.likedBy, userId] } // Update likes and likedBy
            : project
        )
      );
    } catch (error) {
      console.error('Error liking project:', error); // Log the error
      alert(error.response?.data?.message || 'An error occurred. Please try again.'); // Show error alert
    }
  };

  // Render error message if there is one
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  // Render the projects
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
              className={`bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200 ${project.likedBy.includes(userId) ? 'opacity-50 cursor-not-allowed' : ''}`}
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
