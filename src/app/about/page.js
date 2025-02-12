"use client";

import React from "react";

const About = () => {
  return ( <div className="py-20 px-5 bg-gray-900 text-white min-h-screen flex flex-col">
    <h1 className="text-3xl font-bold text-center">AI Powered, Human Led</h1>
    <p className="text-center mt-4 text-gray-400">
      MJX LABS is a combination of internal experts, global talent, and superior AI technology working together to build innovative companies and teams better.
    </p>

    <h2 className="text-2xl font-bold mt-10">Our Story</h2>
    <p className="mt-2 text-gray-300">
      Founded in 2018, MJX LABS has been on a mission to connect companies with the best talent from around the world. Our unique approach combines AI technology with human expertise to ensure that every hire is a perfect fit.
    </p>

    <h2 className="text-2xl font-bold mt-10">MJX LABS Leadership Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Harshal Behare</h3>
        <p className="text-gray-400">Lead Developer</p>
        <p className="text-gray-300 mt-2">Expert in full-stack development.</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Anuj Mahajan</h3>
        <p className="text-gray-400">Product Manager</p>
        <p className="text-gray-300 mt-2">Specializes in product strategy and execution.</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Mayur Agrawal</h3>
        <p className="text-gray-400">Data Scientist</p>
        <p className="text-gray-300 mt-2">Expert in data analysis and machine learning.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-10">Our Milestones</h2>
    <div className="mt-4">
      <ul className="list-disc list-inside text-gray-300">
        <li>2018: Founded MJX LABS</li>
        <li>2019: Launched our first product</li>
        <li>2020: Expanded to international markets</li>
        <li>2021: Reached 1,000 successful placements</li>
        <li>2022: Introduced AI-driven matching technology</li>
        <li>2023: Partnered with leading tech companies</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-10">Our Awards and Accolades</h2>
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="font-bold">Forbes</h3>
        <p className="text-gray-400">Best Startup of 2022</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="font-bold">Fast Company</h3>
        <p className="text-gray-400">Most Innovative Company 2023</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="font-bold">Deloitte</h3>
        <p className="text-gray-400">Fastest Growing Tech Company 2023</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-10">Ways to Engage with MJX LABS</h2>
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
        <h3 className="font-bold">Start Your Journey</h3>
        <p>Innovate your business with AI-powered talent.</p>
      </div>
      <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg">
        <h3 className="font-bold">Work at MJX LABS</h3>
        <p>Join our AI infrastructure company.</p>
      </div>
      <div className="bg-purple-600 text-white p-4 rounded-lg shadow-lg">
        <h3 className="font-bold">Partner with Us</h3>
        <p>Get matched to high-paying jobs.</p>
      </div>
    </div>

    
  </div>);
};

export default About; 