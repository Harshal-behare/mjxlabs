'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ManagedCloudDevOps = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Managed Cloud & DevOps</h1>
          <p className="text-xl text-center max-w-4xl mx-auto">
            Build & Optimize Your Cloud Infrastructure and Streamline Operations With Scalable Solutions
          </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-black text-white py-12 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            A Stringent Process For Seamless Cloud-Based Project Deliveries
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 relative">
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                01
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic Consultation</h3>
              <p className="text-gray-300">
                We analyze your cloud infrastructure to highlight opportunities and outline a strategic path for growth.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 relative">
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                02
              </div>
              <h3 className="text-xl font-bold mb-4">Quick Implementation</h3>
              <p className="text-gray-300">
                Our recommended cloud solutions help high-quality cloud integration across public, private, or hybrid environments.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 relative">
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                03
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Optimization</h3>
              <p className="text-gray-300">
                We analyze cloud performance and implement thorough cloud practices to maximize efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-blue-500 text-center mb-2">Features</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Optimize Cloud Infrastructure And Streamline DevOps For Superior Results
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="h-40 flex items-center justify-center mb-4">
                <div className="relative w-24 h-24">
                  {/* Placeholder for Environment Automation icon */}
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Environment Automation</h3>
              <p className="text-gray-600">
                Automate your cloud infrastructure provisioning and configuration to streamline operations.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="h-40 flex items-center justify-center mb-4">
                <div className="relative w-full h-full">
                  {/* Performance Monitoring feature image */}
                  <div className="w-full h-full bg-blue-500 rounded-lg flex items-center justify-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Monitoring</h3>
              <p className="text-gray-600">
                Monitor real-time application performance to optimize efficiency and reliability.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="h-40 flex items-center justify-center mb-4">
                <div className="relative w-24 h-24">
                  {/* Placeholder for Security & Compliance icon */}
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Security & Compliance</h3>
              <p className="text-gray-600">
                Ensure your cloud infrastructure meets security standards and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-black text-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Optimize Development, Continuous Integration, And Cloud Scalability For Seamless Operations
          </h2>
          
          {/* Service Card 1 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Seamless Migration and Infrastructure Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-green-500 flex-shrink-0 mr-3 mt-1"></span>
                  <span>Strategic Infrastructure Migration Plan</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-green-500 flex-shrink-0 mr-3 mt-1"></span>
                  <span>Ongoing Monitoring and Maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-green-500 flex-shrink-0 mr-3 mt-1"></span>
                  <span>Regular Maintenance</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Placeholder for Infrastructure Management image */}
                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Card 2 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Continuous Integration and Deployment (CI/CD)</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-green-500 flex-shrink-0 mr-3 mt-1"></span>
                  <span>Reliable CI/CD Pipeline</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-green-500 flex-shrink-0 mr-3 mt-1"></span>
                  <span>Automated Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-green-500 flex-shrink-0 mr-3 mt-1"></span>
                  <span>Rapid Deployment</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Placeholder for CI/CD image */}
                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Card 3 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Security, Monitoring, and Continuous Improvement</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-green-500 flex-shrink-0 mr-3 mt-1"></span>
                  <span>Enhanced Security Posture</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-green-500 flex-shrink-0 mr-3 mt-1"></span>
                  <span>Continuous Monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-green-500 flex-shrink-0 mr-3 mt-1"></span>
                  <span>Detailed Logs and Proactive Maintenance</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Placeholder for Security Monitoring image */}
                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Tech Stack</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12">
            {['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Git', 'Jenkins', 'Ansible', 'Cloudflare', 'Prometheus', 'Grafana', 'Elastic Stack'].map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  {/* Placeholder for tech logo */}
                  <div className="w-10 h-10 bg-gray-100 rounded-md"></div>
                </div>
                <span className="text-sm text-center">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-12 px-4 md:px-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-500 mb-1">Have a project in mind?</h2>
            <p className="text-xl">Let's Connect</p>
          </div>
          <button className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md flex items-center">
            Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagedCloudDevOps;