"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="py-20 px-5">
      <h1 className="text-3xl font-bold text-center">Your Trusted Partner in Software Development</h1>
      <p className="text-center mt-4 text-gray-400">
        With years of experience in the industry, we specialize in delivering tailored software solutions that meet the unique needs of our clients.
      </p>

      <h2 className="text-2xl font-bold mt-10">Mission & Vision</h2>
      <p className="mt-2 text-gray-300">
        <strong>Mission:</strong> Helping businesses scale with tailored solutions.
      </p>
      <p className="mt-2 text-gray-300">
        <strong>Vision:</strong> To be a global leader in software outsourcing.
      </p>

      <h2 className="text-2xl font-bold mt-10">Our Values</h2>
      <ul className="list-disc list-inside mt-2 text-gray-300">
        <li>Innovation</li>
        <li>Customer-Centricity</li>
        <li>Reliability</li>
        <li>Collaboration</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white">John Doe</h3>
          <p className="text-gray-400">CEO & Founder</p>
          <p className="text-gray-300 mt-2">Expert in software architecture and project management.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white">Jane Smith</h3>
          <p className="text-gray-400">CTO</p>
          <p className="text-gray-300 mt-2">Specializes in AI and machine learning solutions.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white">Alice Johnson</h3>
          <p className="text-gray-400">Lead Developer</p>
          <p className="text-gray-300 mt-2">Expert in full-stack development and cloud solutions.</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default AboutPage; 