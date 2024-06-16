import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

import GithubHeatMap from "../components/GithubHeatMap";



export default function About() {
  
  return (
    <div className='min-h-screen flex items-center justify-center flex-col gap-10'>
    <br/>
      <AboutMe/>
      <Education/>
      <Skills/>
      <Experience/>
      <div>
      <Link
        to='/projects'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white animate-pulse'
      >
         <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ' >Projects</span>
        
      </Link>
      </div>
     
        <br/>
        <GithubHeatMap/>
    </div>
  );
}