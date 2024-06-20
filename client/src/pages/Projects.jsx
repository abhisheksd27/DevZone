import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import CallToAction from '../components/CallToAction';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects/getProjects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const projectTypes = [...new Set(projects.map((project) => project.type))];

  return (
    <div className='min-h-screen max-w-6xl mx-auto flex flex-col items-center gap-6 p-3'>
      <h1 className="text-2xl font-bold mt-10 mb-5 text-center text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse rounded-lg p-2">
        Projects
      </h1>
      <p className="text-md text-gray-500 text-center mb-10">
        Explore a curated collection of diverse projects showcasing skills in web development, programming, and machine
        learning. Each project demonstrates practical application and learning outcomes, featuring technologies such as
        React, Flask, Django, and more. Discover live demos, GitHub repositories, and insights gained from each project,
        providing a glimpse into the journey of learning and creating.
      </p>
      {projectTypes.map((type, index) => (
        <div key={index} className="w-full">
          <h2 className="text-2xl font-bold mt-10 mb-5 text-center text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse rounded-lg">
            {type}
          </h2>
          <div className='flex flex-wrap justify-center gap-6'>
            {projects
              .filter((project) => project.type === type)
              .map((project, idx) => (
                <div key={idx} className='project-card border p-5 rounded-lg shadow-md flex flex-col items-center max-w-md transition duration-300 ease-in-out transform hover:scale-105'>
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-center text-gradient bg-gradient-to-r from-green-400 to-blue-500 animate-pulse rounded-lg p-2">
                    {project.title}
                  </h3>
                  <div className="mb-2 text-center">
                    <strong className="text-lg text-gray-700">Tech Stack:</strong> {project.techStack.join(', ')}
                  </div>
                  <div className="mb-2 text-center">
                    <strong className="text-lg text-gray-700">About:</strong> {project.about}
                  </div>
                  <div className="mb-2 text-center">
                    <strong className="text-lg text-gray-700">Learnings:</strong> {project.learnings}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Button color="info">Live Link</Button>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button color="dark">GitHub</Button>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
      <CallToAction />
    </div>
  );
};

export default Projects;