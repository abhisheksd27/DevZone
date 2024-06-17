import React from 'react';
import { Button } from 'flowbite-react';
import CallToAction from '../components/CallToAction';

const projects = [
  {
    name: "To-Do List",
    type: "Practice Project",
    techStack: ["HTML", "CSS", "JavaScript"],
    about: "A simple to-do list application that allows users to add, delete, and mark tasks as complete.",
    liveLink: "https://example.com/todo-list",
    githubLink: "https://github.com/username/todo-list",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I learned about DOM manipulation, event handling, and local storage.",
  },
  {
    name: "Calculator",
    type: "Practice Project",
    techStack: ["HTML", "CSS", "JavaScript"],
    about: "A basic calculator application with functionalities to perform arithmetic operations.",
    liveLink: "https://example.com/calculator",
    githubLink: "https://github.com/username/calculator",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I learned about event handling, state management, and basic arithmetic operations in JavaScript.",
  },
  {
    name: "Weather App",
    type: "React Project",
    techStack: ["React", "CSS"],
    about: "A weather application that fetches and displays weather data from an external API based on the user's location.",
    liveLink: "https://example.com/weather-app",
    githubLink: "https://github.com/username/weather-app",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I gained experience with React hooks, API integration, and state management.",
  },
  {
    name: "Task Manager",
    type: "React Project",
    techStack: ["React", "CSS"],
    about: "A task management app to create, edit, and delete tasks, with persistent state using local storage.",
    liveLink: "https://example.com/task-manager",
    githubLink: "https://github.com/username/task-manager",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I learned about state management in React, component lifecycle, and local storage.",
  },
  {
    name: "Blog Platform",
    type: "Flask Project",
    techStack: ["Python", "Flask", "SQLite"],
    about: "A blog platform that allows users to create, edit, and delete posts, with user authentication and commenting functionality.",
    liveLink: "https://example.com/blog-platform",
    githubLink: "https://github.com/username/blog-platform",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I learned about Flask routing, templating, and database interactions.",
  },
  {
    name: "Chat Application",
    type: "Flask Project",
    techStack: ["Python", "Flask", "Socket.IO"],
    about: "A real-time chat application using Flask and Socket.IO for handling WebSocket connections.",
    liveLink: "https://example.com/chat-application",
    githubLink: "https://github.com/username/chat-application",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I learned about real-time communication using WebSockets, and integrating Flask with Socket.IO.",
  },
  {
    name: "E-commerce Site",
    type: "Django Project",
    techStack: ["Python", "Django", "PostgreSQL"],
    about: "An e-commerce site with product listings, shopping cart, and checkout functionalities, including payment integration.",
    liveLink: "https://example.com/e-commerce-site",
    githubLink: "https://github.com/username/e-commerce-site",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I gained experience with Django models, views, forms, and integrating third-party payment gateways.",
  },
  {
    name: "Portfolio Website",
    type: "Django Project",
    techStack: ["Python", "Django", "Bootstrap"],
    about: "A personal portfolio website to showcase projects, skills, and contact information.",
    liveLink: "https://example.com/portfolio-website",
    githubLink: "https://github.com/username/portfolio-website",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I learned about Django templating, static file management, and deploying a Django application.",
  },
  {
    name: "Movie Recommendation System",
    type: "Machine Learning Project",
    techStack: ["Python", "Pandas", "Scikit-learn"],
    about: "A machine learning system that recommends movies to users based on their viewing history and preferences.",
    liveLink: "https://example.com/movie-recommendation",
    githubLink: "https://github.com/username/movie-recommendation",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I learned about data preprocessing, collaborative filtering, and model evaluation.",
  },
  {
    name: "Stock Price Predictor",
    type: "Machine Learning Project",
    techStack: ["Python", "Pandas", "TensorFlow"],
    about: "A machine learning model that predicts stock prices using historical data and deep learning techniques.",
    liveLink: "https://example.com/stock-price-predictor",
    githubLink: "https://github.com/username/stock-price-predictor",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I learned about time series analysis, LSTM networks, and model evaluation.",
  },
  {
    name: "Social Media App",
    type: "MERN Stack Project",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    about: "A social media application where users can create profiles, post updates, and interact with others.",
    liveLink: "https://example.com/social-media-app",
    githubLink: "https://github.com/username/social-media-app",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I gained experience with the MERN stack, JWT authentication, and real-time updates using WebSockets.",
  },
  {
    name: "Fitness Tracker",
    type: "MERN Stack Project",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    about: "A fitness tracking application where users can log their workouts, track progress, and set goals.",
    liveLink: "https://example.com/fitness-tracker",
    githubLink: "https://github.com/username/fitness-tracker",
    image: "https://via.placeholder.com/300", // Placeholder image URL
    learnings: "I learned about CRUD operations in MERN stack, state management in React, and creating RESTful APIs.",
  },
  
];
const Projects = () => {
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.type]) {
      acc[project.type] = [];
    }
    acc[project.type].push(project);
    return acc;
  }, {});

  return (
    <div className='min-h-screen max-w-6xl mx-auto flex flex-col items-center gap-6 p-3'>
      <h1 className='text-2xl font-bold mt-10 mb-5 text-center text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse rounded-lg p-2'>Projects</h1>
      <p className='text-md text-gray-500 text-center'>Explore a curated collection of diverse projects showcasing skills in web development, programming, and machine learning. Each project demonstrates practical application and learning outcomes, featuring technologies such as React, Flask, Django, and more. Discover live demos, GitHub repositories, and insights gained from each project, providing a glimpse into the journey of learning and creating.</p>

      {Object.keys(groupedProjects).map((type, index) => (
        <div key={index} className='w-full'>
          <h2 className='text-2xl font-bold mt-10 mb-5 text-center text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse rounded-lg'>{type}</h2>
          <div className='flex flex-wrap justify-center gap-6'>
            {groupedProjects[type].map((project, idx) => (
              <div key={idx} className='project-card border p-5 rounded-lg shadow-md flex flex-col items-center max-w-md transition duration-300 ease-in-out transform hover:scale-105'>
                <img src={project.image} alt={project.name} className='w-full h-48 object-cover rounded-lg mb-4' />
                <h3 className='text-xl font-semibold mb-2 text-center text-gradient bg-gradient-to-r from-green-400 to-blue-500 animate-pulse rounded-lg p-2'>{project.name}</h3>
                <div className='mb-2 text-center'>
                  <strong className='text-lg text-gray-700'>Tech Stack:</strong> {project.techStack.join(', ')}
                </div>
                <div className='mb-2 text-center'>
                  <strong className='text-lg text-gray-700'>About:</strong> {project.about}
                </div>
                <div className='mb-2 text-center'>
                  <strong className='text-lg text-gray-700'>Learnings:</strong> {project.learnings}
                </div>
                <div className='flex gap-3 mt-auto'>
                  <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                    <Button color='info'>Live Link</Button>
                  </a>
                  <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                    <Button color='dark'>GitHub</Button>
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