"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId] = useState("zufishan sadaf"); 
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/projects`);
        setProjects(response.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [API_BASE_URL]);

  // Handle like button functionality with optimistic UI update
  const handleLike = async (id) => {
    // Optimistic Update
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project._id === id
          ? {
              ...project,
              likes: project.likes + 1,
              likedBy: [...project.likedBy, userId],
            }
          : project
      )
    );

    try {
      const response = await axios.post(`${API_BASE_URL}/projects/${id}/like`, {
        userId,
      });
      // Confirm server update
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project._id === id
            ? {
                ...project,
                likes: response.data.likes,
                likedBy: response.data.likedBy,
              }
            : project
        )
      );
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred.");
      // Revert optimistic update in case of failure
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project._id === id
            ? {
                ...project,
                likes: project.likes - 1,
                likedBy: project.likedBy.filter((uid) => uid !== userId),
              }
            : project
        )
      );
    }
  };

  // Card Component to display individual project details
  const Card = ({ project }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        {/* Project Image */}
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}

        {/* Project Title */}
        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>

        {/* Project Description */}
        <p className="text-gray-600 my-2">{project.description}</p>

        {/* Likes Count */}
        <p className="text-gray-500">Likes: {project.likes}</p>

       {/* Like Button */}
<button
  onClick={() => handleLike(project._id)}
  disabled={project.likedBy.includes(userId)}
  className={`mt-2 px-4 py-2 rounded-full text-white ${
    project.likedBy.includes(userId)
      ? "bg-gray-400"
      : "bg-blue-500 hover:bg-blue-700"
  } mr-4`} /* Add right margin to the Like button */
>
  {project.likedBy.includes(userId) ? "Liked" : "Like"}
</button>

{/* GitHub Link */}
{project.githubLink && (
  <a
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 px-4 py-2 bg-red-600 text-white font-medium text-center rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Code
  </a>
)}



      </div>
    );
  };

  return (
    <>
    {/* <div className="flex justify-between items-center mb-6"> */}
    <h1 className="font-lato font-light text-4xl tracking-tight mb-2 text-center  bg-yellow-100 rounded-3xl">Projects</h1>

  
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      
      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p>The database has not been deployed to Vercel.</p>
      ) : (
        projects.map((project) => <Card key={project._id} project={project} />)
      )}
    </div>
    </>
  );
};

export default Projects;
