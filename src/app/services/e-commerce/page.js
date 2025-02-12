"use client";

import React from "react";

const ECommerce = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-5">
      <h1 className="text-3xl font-bold text-center mt-10">E-commerce Solutions</h1>
      <p className="text-center mt-4 text-gray-400">Building scalable e-commerce platforms for your business.</p>
      <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="mt-2 text-gray-400">Our e-commerce solutions are designed to maximize your online sales.</p>
        <h3 className="mt-4 text-xl font-bold">Key Features:</h3>
        <ul className="list-disc list-inside mt-2 text-gray-400">
          <li>Customizable storefronts</li>
          <li>Secure payment gateways</li>
          <li>Inventory management</li>
        </ul>
      </div>
    </div>
  );
};

export default ECommerce; 