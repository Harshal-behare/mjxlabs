"use client";

import React from "react";

const AIMachineLearning = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex flex-col p-10">
      <h1 className="text-4xl font-bold text-center mt-20 text-white">AI & Machine Learning Solutions</h1>
      <p className="text-center mt-8 text-gray-300">
        Transforming businesses with intelligent solutions.
      </p>
      <div className="mt-16 p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white">Overview</h2>
        <p className="mt-4 text-gray-400">
          We craft bespoke AI and machine learning solutions, meticulously tailored to your unique business needs. Our process encompasses:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-400">
          <li>
            <strong className="text-white">Understanding Your Needs:</strong>
            We start by deeply understanding your business objectives and challenges.
          </li>
          <li>
            <strong className="text-white">Data Analysis:</strong>
            We meticulously analyze your data to uncover hidden patterns and actionable insights.
          </li>
          <li>
            <strong className="text-white">Model Development:</strong>
            We develop and train cutting-edge machine learning models using advanced techniques.
          </li>
          <li>
            <strong className="text-white">Deployment & Integration:</strong>
            We seamlessly integrate our AI solutions into your existing systems.
          </li>
          <li>
            <strong className="text-white">Ongoing Support:</strong>
            We provide ongoing support and maintenance to ensure optimal performance.
          </li>
        </ul>
        <h3 className="mt-8 text-2xl font-bold text-white">Key Technologies</h3>
        <ul className="list-disc list-inside mt-4 text-gray-400">
          <li>Predictive Analytics</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>Deep Learning</li>
          <li>Reinforcement Learning</li>
        </ul>
        <h3 className="mt-8 text-2xl font-bold text-white">Examples of Our Work</h3>
        <ul className="list-disc list-inside mt-4 text-gray-400">
          <li>
            Developed a predictive model to optimize inventory management, resulting in a 15% reduction in costs.
          </li>
          <li>
            Created a natural language processing system to automate customer service inquiries, improving response times by 20%.
          </li>
          <li>
            Built a computer vision solution to detect defects in manufacturing, reducing waste by 10%.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AIMachineLearning;