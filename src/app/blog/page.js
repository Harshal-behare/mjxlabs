"use client";

import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-5">
      <h1 className="text-3xl font-bold text-center mt-10">MJX LABS Blog</h1>
      <p className="text-center mt-4 text-gray-400">
        AI-powered, human-led stories to inspire business innovation and transformation.
      </p>
      
      <div className="mt-10">
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold">Turing Achieves 3x ARR Growth, Profitability, and AI Scaling in 2024</h2>
            <p className="mt-2 text-gray-400">Turing AGI Icons 3: Advancing AI with Jeff Dean and Gemini 2.0</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Read more</button>
          </div>
          {/* Repeat similar blocks for other blog posts */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl mt-4">
            <h2 className="text-xl font-bold">OpenAI's Latest Model: A Fresh Perspective on Coding with AI</h2>
            <p className="mt-2 text-gray-400">Insights from AI leaders on the latest advancements.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Read more</button>
          </div>
          {/* Add more blog post blocks as needed */}
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold">Stay up to date with all things AI transformation.</h2>
        <input
          type="email"
          placeholder="Enter your email..."
          className="mt-4 p-2 rounded-md border border-gray-600 bg-gray-800 text-white"
        />
        <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
      </div>
    </div>
  );
};

export default Blog; 