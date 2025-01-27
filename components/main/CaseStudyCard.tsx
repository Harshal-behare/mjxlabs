"use client";

import React from "react";

type CaseStudyProps = {
  title: string;
  problem: string;
  solution: string;
  results: string;
  testimonial?: string;
};

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, problem, solution, results, testimonial }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <h4 className="text-lg font-semibold text-gray-300 mt-2">Problem Statement:</h4>
      <p className="text-gray-400">{problem}</p>
      <h4 className="text-lg font-semibold text-gray-300 mt-2">Solution Provided:</h4>
      <p className="text-gray-400">{solution}</p>
      <h4 className="text-lg font-semibold text-gray-300 mt-2">Results:</h4>
      <p className="text-gray-400">{results}</p>
      {testimonial && (
        <>
          <h4 className="text-lg font-semibold text-gray-300 mt-2">Testimonial:</h4>
          <p className="text-gray-400 italic">"{testimonial}"</p>
        </>
      )}
    </div>
  );
};

export default CaseStudyCard; 