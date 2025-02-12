"use client";

import React from "react";

const MobileAppDevelopment = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-5">
      <h1 className="text-3xl font-bold text-center mt-10">Mobile App Development</h1>
      <p className="text-center mt-4 text-gray-400">Creating native and cross-platform mobile applications.</p>
      <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="mt-2 text-gray-400">We develop mobile applications that provide a seamless user experience.</p>
        <h3 className="mt-4 text-xl font-bold">Key Features:</h3>
        <ul className="list-disc list-inside mt-2 text-gray-400">
          <li>Cross-platform compatibility</li>
          <li>Intuitive UI/UX design</li>
          <li>Robust performance</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileAppDevelopment; 