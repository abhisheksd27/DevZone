import React from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGitAlt, FaGithub, FaDocker, FaChartBar, FaGoogle, FaMoon } from 'react-icons/fa';
import { SiC, SiCplusplus, SiDjango, SiMongodb, SiMysql, SiPostgresql, SiTailwindcss, SiBootstrap, SiVisualstudiocode, SiPycharm, SiFigma, SiCanva, SiNumpy, SiPandas, SiRedux, SiFirebase, SiJsonwebtokens } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython />, level: '75%' },
  { name: 'HTML', icon: <FaHtml5 />, level: '70%' },
  { name: 'CSS', icon: <FaCss3Alt />, level: '70%' },
  { name: 'JavaScript', icon: <FaJs />, level: '50%' },
  { name: 'C', icon: <SiC />, level: '50%' },
  { name: 'C++', icon: <SiCplusplus />, level: '50%' },
  { name: 'Django', icon: <SiDjango />, level: '50%' },
  { name: 'React', icon: <FaReact />, level: '50%' },
  { name: 'MongoDB', icon: <SiMongodb />, level: '50%' },
  { name: 'MySQL', icon: <SiMysql />, level: '70%' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: '60%' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: '70%' },
  { name: 'Bootstrap 5', icon: <SiBootstrap />, level: '80%' },
  { name: 'GitHub', icon: <FaGithub />, level: '70%' },
  { name: 'Git', icon: <FaGitAlt />, level: '90%' },
  { name: 'VS Code', icon: <SiVisualstudiocode />, level: '90%' },
  { name: 'PyCharm', icon: <SiPycharm />, level: '70%' },
  { name: 'Figma', icon: <SiFigma />, level: '80%' },
  { name: 'Canva', icon: <SiCanva />, level: '90%' },
  { name: 'NumPy', icon: <SiNumpy />, level: '40%' },
  { name: 'Pandas', icon: <SiPandas />, level: '30%' },
  { name: 'Matplotlib', icon: <FaChartBar />, level: '50%' }, 
  { name: 'Docker', icon: <FaDocker />, level: '30%' },
  { name: 'Insomnia', icon: <FaMoon />, level: '70%' },
  { name: 'Firebase', icon: <SiFirebase />, level: '60%' },
  { name: 'Google OAuth', icon: <FaGoogle />, level: '50%' },
  { name: 'Redux', icon: <SiRedux />, level: '50%' },
  { name: 'JWT', icon: <SiJsonwebtokens />, level: '50%' }, 
];

const Skills = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-end items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse">
              <div className="text-3xl text-purple-500 transform scale-110">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                    <div style={{ width: skill.level }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
