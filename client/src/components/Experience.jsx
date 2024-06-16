import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    date: '2024 - Jan',
    role: 'Full Stack Intern',
    company: 'Webstack Academy',
    location: 'India',
    description: "During my internship at WebStack Academy, I've honed my skills in API development, specifically focusing on backend-frontend integration. This involved configuring endpoints, managing HTTP requests, and addressing integration challenges, showcasing my problem-solving abilities in software development."
  },
  {
    date: '2024 - Feb',
    role: 'Machine Learning Intern (Research Based)',
    company: 'Varcons Technologies',
    location: 'India',
    description: "During my internship at Varcons Technologies, I've immersed myself in machine learning, emphasizing hands-on implementation and problem-solving. I've become proficient in utilizing frameworks like NumPy, Pandas, and Matplotlib, mastering data cleaning methodologies and implementing algorithms including KNN, Decision Trees, and Gaussian Naive Bayes."
  }
];

const Experience = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Experience</h1>
        <div className="relative">
          <div className="border-r-4 border-purple-500 absolute h-full top-0" style={{ left: '1.5rem' }}></div>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex items-center justify-center animate-pulse">
              <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center z-10">
                <FaBriefcase />
              </div>
              <div className="ml-6 p-6 bg-gray-800 rounded-lg shadow-lg flex-1 text-left">
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="text-purple-500 text-xl mr-2" />
                  <span className="text-xl font-semibold">{exp.date}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-purple-500 text-xl mr-2" />
                  <span className="text-lg font-medium">{exp.company}, {exp.location}</span>
                </div>
                <p className="text-lg">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
