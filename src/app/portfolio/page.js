import React from 'react';

const Portfolio = () => {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Project Alpha</h2>
          <p className="mt-2 text-gray-400">A cutting-edge AI solution for data analysis.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Project Beta</h2>
          <p className="mt-2 text-gray-400">An innovative mobile app for e-commerce.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Project Gamma</h2>
          <p className="mt-2 text-gray-400">A comprehensive cloud solution for businesses.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Project Delta</h2>
          <p className="mt-2 text-gray-400">Advanced AI-driven marketing strategies.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Project Epsilon</h2>
          <p className="mt-2 text-gray-400">Innovative solutions for sustainable energy.</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-12 mb-6">Additional Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Project Zeta</h2>
          <p className="mt-2 text-gray-400">Customizable AI solutions for healthcare.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Project Eta</h2>
          <p className="mt-2 text-gray-400">Optimized machine learning operations.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Project Theta</h2>
          <p className="mt-2 text-gray-400">Application development and cloud migration.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
