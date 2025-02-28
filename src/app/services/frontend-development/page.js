'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FrontendDevelopmentPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frontend Development</h1>
        <p className="text-lg mx-auto max-w-3xl mb-12">
          Build Beautiful, Responsive, And User-Friendly Web Interfaces With Our Expertise In Modern Technologies
        </p>
        
        {/* Our Methodology */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-left">Our Methodology For Creating Intuitive And Responsive Front-End Interfaces</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requirement Analysis */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Requirement Analysis</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Understanding the client's design needs, user needs, and business objectives.
              </p>
            </div>
            
            {/* Wireframing & Prototyping */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Wireframing & Prototyping</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Creating interactive skeletons to test and get valuable feedback for user experience.
              </p>
            </div>
            
            {/* Agile Development */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Agile Development</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Building dynamic and useful interfaces using modern frameworks like React, Angular, or Vue.js.
              </p>
            </div>
            
            {/* Responsive Design */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">Responsive Design</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Ensuring excellent performance across all devices and screen sizes.
              </p>
            </div>
            
            {/* Performance Optimization */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all md:col-span-2">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold">Performance Optimization</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Implementing best practices for faster load times, highly optimized user interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transforming Ideas Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Transforming Ideas into Impactful Web Experiences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Expert team of innovators */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-32 h-32 relative">
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert team of innovators</h3>
            <p className="text-gray-400 text-sm">
              Our team combines creativity, technical expertise, and a deep understanding of business needs to build exceptional frontend solutions.
            </p>
          </div>
          
          {/* Tailored solutions for your ideas */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-48 h-48 bg-blue-500 rounded-lg p-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Tailored solutions for your ideas</h3>
            <p className="text-gray-400 text-sm">
              We develop custom frontend solutions that align with your vision and create engaging digital experiences.
            </p>
          </div>
          
          {/* Commitment to quality */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-32 h-32 relative">
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Commitment to quality</h3>
            <p className="text-gray-400 text-sm">
              Quality assurance at every step ensures reliable, high-performance solutions that exceed expectations and deliver value.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-400 uppercase tracking-wide mb-1">Our Process</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Innovative Frontend Solutions That Scale With Your Business, Enhance UX, And Boost Engagement
          </h3>
          
          {/* Process Cards */}
          <div className="space-y-12">
            {/* Strategic Discovery */}
            <div className="bg-gray-900 rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold mb-4">Strategic Discovery</h4>
                <p className="text-gray-400 mb-6">
                  We begin by understanding your design goals, needs and goals, conducting thorough research to craft a tailored and robust solution for your audience and goals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Comprehensive analysis of your business, goals, and target audience</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Insights to create a tailored approach to specific needs</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">A clear plan, full-on branding frameworks, and migration from the past</p>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Innovative Design & Development */}
            <div className="bg-gray-900 rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold mb-4">Innovative Design & Development</h4>
                <p className="text-gray-400 mb-6">
                  Our expert team of developers brings to innovative, scalable designs, using the latest technologies to build exceptional, high-performance user interfaces in record time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Iterative feedback for practical interface builds</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Agile methodology to ensure on-time delivery despite contingent issues</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Continuous factor testing to solve the bugs fit for an action</p>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Seamless Integration & Optimization */}
            <div className="bg-gray-900 rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold mb-4">Seamless Integration & Optimization</h4>
                <p className="text-gray-400 mb-6">
                  Beyond development, we incorporate best-in-class performance practices, efficient analytics that continuously evolve with your business to maximize impact.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Seamless flow of functionality with site-to-site transitions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Extensive testing programs that certify quality</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Refined metrics and tracking with data and scoring pages with appropriate sources</p>
                  </li>
        </ul>
      </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-items-center">
          {[
            "JavaScript", "HTML/CSS", "Tailwind", "React", "Next.js", "Angular", "Vue.js", "Node.js"
          ].map((tech, index) => (
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