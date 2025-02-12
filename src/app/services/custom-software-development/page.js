"use client";

import React from "react";

const CustomSoftwareDevelopment = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-5">
      <h1 className="text-3xl font-bold text-center mt-10">Custom Software Development</h1>
      <p className="text-center mt-4 text-gray-400">Tailored software solutions for your business needs.</p>
      <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="mt-2 text-gray-400">We specialize in creating custom software that meets your unique requirements.</p>
        <h3 className="mt-4 text-xl font-bold">Key Features:</h3>
        <ul className="list-disc list-inside mt-2 text-gray-400">
          <li>Scalable architecture</li>
          <li>User-friendly interfaces</li>
          <li>Integration with existing systems</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomSoftwareDevelopment; 