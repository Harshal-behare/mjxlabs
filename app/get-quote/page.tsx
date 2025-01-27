"use client";

import React, { useState } from "react";

export default function GetQuotePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [budgetRange, setBudgetRange] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, companyName, projectType, projectDetails, budgetRange });
  };

  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold text-center text-white">Get a Quote</h1>
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
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Project Type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
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
            placeholder="Budget Range"
            value={budgetRange}
            onChange={(e) => setBudgetRange(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Request a Free Quote
        </button>
      </form>
    </div>
  );
} 