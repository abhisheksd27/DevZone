import React from 'react';

const Education = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-end items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=''>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold">CMR Institute of Technology, Bengalore</h3>
                <p className="text-white-400">2020-2024</p>
                <p className="text-white-300">B.E in Information Science and Engineering (8.43 cgpa)</p>
              </div>
            </div>
          </div>
          <div className=''>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold">R.N Shetty PU college, Kundapura</h3>
                <p className="text-white-400">2018-2020</p>
                <p className="text-white-300">PCMB (83.5 %)</p>
              </div>
            </div>
          </div>
          <div className=''>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold">Govt High School, Alur</h3>
                <p className="text-white-400">2018</p>
                <p className="text-white-300">SSLC (93.12 %)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;