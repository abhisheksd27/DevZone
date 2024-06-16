import React from 'react';
import myPhoto from '../assets/abhishek.jpeg'; 
import { Button } from 'flowbite-react';

const AboutMe = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-end items-center rounded-tl-3xl rounded-br-3xl text-center '>
      {/* Left Column */}
      <div className="flex-1 justify-center flex flex-col mb-4 sm:mb-0">
        <h2 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition-transform transform hover:scale-105 animate-pulse'>
          About Me
        </h2>
        <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition-transform transform hover:scale-105 animate-pulse'>
          Hi, I'm Abhishek Shankar
        </h3>

        <p className='text-gray-500 my-2'>
          As a passout student of 2024 ISE from CMR Institute of Technology 🎓, specializing in Information Science and Engineering, I excel in a variety of technologies. 
          <br/>Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) 💻, I craft dynamic and scalable web applications. 
          <br/>With Django, I harness Python's power 🐍 to create secure and efficient web solutions.
          <br/> Deeply passionate about machine learning 🤖, I ensure the development of efficient and optimized code. Let's innovate together! ✨
        </p>

        <p className='text-gray-500 my-2'>
          I am open to job opportunities such as Software Engineer, SDE, Full Stack Developer, React Frontend Developer, Backend Developer, and Python Developer roles. 
          I am excited to bring my skills and passion for technology to a dynamic team.
        </p>

        <p className='text-gray-500 my-2'>
          <strong>Email:</strong> abhisheksdevadiga271@gmail.com<br />
          <strong>Contact:</strong> +91 7338006503<br />
          <strong>GitHub:</strong> <a href="https://github.com/abhisheksd27" target='_blank' rel='noopener noreferrer' className='text-teal-500'>github.com/abhisheksd27</a><br />
          <strong>Discord:</strong> <a href="https://discordapp.com/users/abhisheksd" target='_blank' rel='noopener noreferrer' className='text-teal-500'>discordapp.com/users/abhisheksd</a>
        </p>
        
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <a href="/Abhishek_shankar.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
      {/* Right Column */}
      <div className="p-7 flex-1">
        <img src={myPhoto} alt="Abhishek Shankar" className='w-full h-auto sm:max-w-xs rounded-lg shadow-md'/>
      </div>
    </div>
  );
};

export default AboutMe;
