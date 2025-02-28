'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AIServicesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Artificial Intelligence</h1>
        <p className="text-lg mx-auto max-w-3xl mb-12">
          Transform Your Business With Strategic, AI-Powered Processes To Create, Use, Scale, And Act Upon Predictions
        </p>
        
        {/* Our Custom Approach */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-left">Our Custom Approach To AI Development Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Discovery */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
              </div>
              <p className="text-gray-400 text-sm">
                We analyze your data and challenges to identify AI opportunities and define a clear development roadmap.
              </p>
            </div>
            
            {/* Design */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Design</h3>
              </div>
              <p className="text-gray-400 text-sm">
                We select features, define applicable technologies, and create a feasible prototype.
              </p>
            </div>
            
            {/* Proof Of Concept */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Proof Of Concept (POC)</h3>
              </div>
              <p className="text-gray-400 text-sm">
                We build the smallest AI solution to validate its real-world feasibility.
              </p>
            </div>
            
            {/* Implementation */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">Implementation</h3>
              </div>
              <p className="text-gray-400 text-sm">
                We build and integrate the AI model, handling the application in your desired environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Unleash Potential Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Unleash the Full Potential of Your Business with AI</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team of Experts */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-32 h-32 relative">
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Team of Experts</h3>
            <p className="text-gray-400 text-sm">
              Our specialists combine industry expertise and AI knowledge to deliver tailored solutions for your unique business challenges.
            </p>
          </div>
          
          {/* Deep Understanding */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-48 h-48 bg-blue-500 rounded-lg p-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Deep Understanding</h3>
            <p className="text-gray-400 text-sm">
              We dive into your specific challenges and business needs. Our deep understanding of AI capabilities helps create solutions with real-world impact.
            </p>
          </div>
          
          {/* Delivered Results */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-32 h-32 relative">
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Delivered Results</h3>
            <p className="text-gray-400 text-sm">
              Our AI solutions deliver tangible business outcomes with measurable ROI, building competitive advantage through innovation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-400 uppercase tracking-wide mb-1">Our Process</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Leverages Data and Predictive Models to Improve Decision-Making and Efficient Collaboration
          </h3>
          
          {/* Process Cards */}
          <div className="space-y-12">
            {/* Discovery & AI Strategy */}
            <div className="bg-gray-900 rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold mb-4">Discovery & AI Strategy</h4>
                <p className="text-gray-400 mb-6">
                  Get a comprehensive in-depth understanding of your business goals, challenges, and expectations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Identify and define significant use business objectives</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Evaluate existing infrastructure and data readiness</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Propose a blueprint to develop AI with clear milestones</p>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-40 h-40 bg-blue-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Development & Customization */}
            <div className="bg-gray-900 rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold mb-4">Development & Customization</h4>
                <p className="text-gray-400 mb-6">
                  Create custom AI solutions that fit your business model, design, develop, and customize AI applications for your specific needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Build and train machine learning models using your data</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Customize AI algorithms to fit your unique operational requirements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Develop prototypes and proof-of-concept AI tools for detailed evaluation</p>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-40 h-40 bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Deployment & Continuous Improvement */}
            <div className="bg-gray-900 rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold mb-4">Deployment & Continuous Improvement</h4>
                <p className="text-gray-400 mb-6">
                  After testing, we deploy your AI solution and continuously monitor and optimize it to ensure optimal business value.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Deploy to scalable and integrated frameworks that suit your infrastructure</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Monitor model performance, model calibration and continuous training</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Provide ongoing support and model retraining as data evolves</p>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-40 h-40 bg-blue-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Tech Stack</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 items-center justify-items-center">
          {["OpenAI", "Python", "React", "TensorFlow", "PyTorch", "Node.js", "Firebase", "AWS", "GCP", "Azure"].map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg w-full">
              <div className="w-12 h-12 bg-gray-800 rounded-full mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <span className="text-xs text-center">{tech}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-12 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-1">Have a project in mind?</h2>
          <p className="text-lg font-medium">Let's Connect</p>
        </div>
        <button className="mt-6 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center">
          Get in touch
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </section>
    </div>
  );
}