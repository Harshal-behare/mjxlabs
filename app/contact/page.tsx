"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [serviceOfInterest, setServiceOfInterest] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, companyName, email, phoneNumber, projectDetails, serviceOfInterest });
  };

  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold text-center text-white">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Project Details"
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Service of Interest"
            value={serviceOfInterest}
            onChange={(e) => setServiceOfInterest(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
      <div className="mt-8 text-center text-gray-400">
        <h2 className="text-xl font-bold">Our Office Locations</h2>
        <p>Pune</p>
        <h2 className="text-xl font-bold mt-4">Contact Information</h2>
        <p>Phone: +1 234 567 890</p>
        <p>Email: info@example.com</p>
        <h2 className="text-xl font-bold mt-4">Follow Us</h2>
        <p>
          <a href="#" className="text-blue-400 hover:underline">Facebook</a> | 
          <a href="#" className="text-blue-400 hover:underline"> Twitter</a> | 
          <a href="#" className="text-blue-400 hover:underline"> LinkedIn</a>
        </p>
      </div>
    </div>
  );
} 