'use client';
import React from 'react';
import Image from 'next/image';

export default function DataAnalyticsPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="bg-black text-white text-center py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Data Analysis & Data Science</h1>
          <p className="text-lg mb-8">Unlock Insights And Drive Decisions With Scalable Data Solutions</p>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Comprehensive Approach To Delivering High-Impact Data Analytics And Data Science Solutions</h2>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
            {/* Consulting */}
            <div className="bg-black border border-gray-800 rounded-lg p-6 relative">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 left-6">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Consulting</h3>
              <p className="text-gray-300 text-sm">We create data-centric strategies to meet your goals by understanding your business needs.</p>
            </div>
            
            {/* Data Analysis & Preparation */}
            <div className="bg-black border border-gray-800 rounded-lg p-6 relative">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 left-6">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Data Analysis & Preparation</h3>
              <p className="text-gray-300 text-sm">Our data experts carefully extract data storing and ensure it's clean for reliable insights.</p>
            </div>
            
            {/* Data Modeling */}
            <div className="bg-black border border-gray-800 rounded-lg p-6 relative">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 left-6">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Data Modelling</h3>
              <p className="text-gray-300 text-sm">We design sophisticated predictive models aligned with your business needs to deliver actionable insights.</p>
            </div>
            
            {/* Evaluation and Adjustments */}
            <div className="bg-black border border-gray-800 rounded-lg p-6 relative">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 left-6">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Evaluation and Adjustments</h3>
              <p className="text-gray-300 text-sm">We continually revise models for accuracy and performance, ensuring optimal results.</p>
            </div>
            
            {/* Integration, Testing & Deployment */}
            <div className="bg-black border border-gray-800 rounded-lg p-6 relative">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 left-6">
                <span className="text-white font-bold">5</span>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Integration, Testing & Deployment</h3>
              <p className="text-gray-300 text-sm">We integrate and test models rigorously before deployment to ensure complete protection.</p>
            </div>
            
            {/* Maintenance */}
            <div className="bg-black border border-gray-800 rounded-lg p-6 relative">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 left-6">
                <span className="text-white font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Maintenance</h3>
              <p className="text-gray-300 text-sm">We provide ongoing support to ensure top performance and long-term results.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data-Driven Agile Enterprise Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-600 font-semibold mb-4">Features</p>
          <h2 className="text-3xl font-bold mb-12">Build A Data-Driven Agile Enterprise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team of Experts */}
            <div className="text-center">
              <div className="mx-auto w-32 h-32 mb-4">
                <img 
                  src="/placeholder/experts.svg" 
                  alt="Team of Experts" 
                  className="w-full h-full object-contain"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Team of Experts</h3>
              <p className="text-gray-600 text-sm">Our team of data analysts and scientists bring years of experience to solve your complex data challenges.</p>
            </div>
            
            {/* Deep Understanding */}
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <div className="mx-auto w-32 h-32 mb-4">
                <img 
                  src="/placeholder/understanding.svg" 
                  alt="Deep Understanding" 
                  className="w-full h-full object-contain"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Deep Understanding</h3>
              <p className="text-white text-sm">Before any analysis, we take time to understand your unique needs and goals to deliver tailored solutions.</p>
            </div>
            
            {/* Delivered Results */}
            <div className="text-center">
              <div className="mx-auto w-32 h-32 mb-4">
                <img 
                  src="/placeholder/results.svg" 
                  alt="Delivered Results" 
                  className="w-full h-full object-contain"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Delivered Results</h3>
              <p className="text-gray-600 text-sm">We focus on tangible outcomes that drive growth and bring measurable value to your business.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-blue-400 font-semibold mb-4">Our Process</p>
          <h2 className="text-3xl font-bold">Data Is Processed, Visualized, And Enhanced By Machine Learning For Smarter Business Decisions</h2>
        </div>
        
        {/* Data Audit & Consultation */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Data Audit & Consultation</h3>
              <p className="text-gray-300 mb-6">We start by understanding your needs and conducting an evaluation of the integrated system.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-500 w-4 h-4 rounded-full mt-1 mr-3"></span>
                  <p className="text-sm">We audit to understand and identify your organization's data needs and goals</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 w-4 h-4 rounded-full mt-1 mr-3"></span>
                  <p className="text-sm">We collect and organize your data for analysis in secure systems</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 w-4 h-4 rounded-full mt-1 mr-3"></span>
                  <p className="text-sm">We integrate a comprehensive roadmap to transform raw data into valuable insights</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="w-full h-48 rounded-lg bg-gray-800"></div>
            </div>
          </div>
        </div>
        
        {/* Data Warehousing & Automation */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Data Warehousing & Automation</h3>
              <p className="text-gray-300 mb-6">Organize structured data by designing and managing your data for efficiency and insights.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-500 w-4 h-4 rounded-full mt-1 mr-3"></span>
                  <p className="text-sm">Our data engineers get to work and design the most effective data warehouse</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 w-4 h-4 rounded-full mt-1 mr-3"></span>
                  <p className="text-sm">Automated data feeds integrated into the application</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 w-4 h-4 rounded-full mt-1 mr-3"></span>
                  <p className="text-sm">Ready to use data and intuitive designs</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="w-full h-48 rounded-lg bg-gray-800"></div>
            </div>
          </div>
        </div>
        
        {/* Advanced Dashboards & Predictive Insights */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Advanced Dashboards & Predictive Insights</h3>
              <p className="text-gray-300 mb-6">Visualize your data through interactive dashboards and insights.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-500 w-4 h-4 rounded-full mt-1 mr-3"></span>
                  <p className="text-sm">Clear and intuitive of your data in one view</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 w-4 h-4 rounded-full mt-1 mr-3"></span>
                  <p className="text-sm">Detect correlations that would normally be hidden</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 w-4 h-4 rounded-full mt-1 mr-3"></span>
                  <p className="text-sm">Use these Predictive to understand and make your next move</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="w-full h-48 rounded-lg bg-gray-800"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {/* Tech icons - row 1 */}
            {['Python', 'R', 'Tableau', 'PowerBI', 'Databricks', 'AWS'].map((tech, index) => (
              <div key={`tech-${index}`} className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                </div>
                <span className="text-sm">{tech}</span>
              </div>
            ))}
            
            {/* Tech icons - row 2 */}
            {['TensorFlow', 'Azure', 'Hadoop', 'Spark', 'PostgreSQL', 'MongoDB'].map((tech, index) => (
              <div key={`tech-${index + 6}`} className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                </div>
                <span className="text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-blue-600">Have a project in mind?</h3>
            <p className="text-lg">Let's Connect</p>
          </div>
          <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-full flex items-center">
            Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}