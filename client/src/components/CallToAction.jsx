import React from 'react';
import { Button } from 'flowbite-react';
import logo from '../assets/abhishek.jpeg'

const CallToAction = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-end items-center rounded-tl-3xl rounded-br-3xl text-center'>
      {/* Left Column */}
      <div className="flex-1 justify-center flex flex-col mb-4 sm:mb-0">
        <h2 className='text-2xl'>
          Want to connect with me?
        </h2>
        <p className='text-gray-500 my-2'>
          Feel free to reach out via email or connect with me on GitHub and Discord. You can also download my resume below.
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
        <img src={logo} alt="Abhishek Shankar" className='w-full h-auto sm:max-w-xs rounded-lg shadow-md'/>
      </div>
    </div>
  );
};

export default CallToAction;
