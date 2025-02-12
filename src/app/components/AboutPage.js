"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="py-20 px-5 bg-gray-900 text-white min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center">AI Powered, Human Led</h1>
      <p className="text-center mt-4 text-gray-400">
        Turing is a combination of internal experts, global talent, and superior AI technology working together to build innovative companies and teams better.
      </p>

      <h2 className="text-2xl font-bold mt-10">Our Story</h2>
      <p className="mt-2 text-gray-300">
        Founded in 2018, Turing has been on a mission to connect companies with the best talent from around the world. Our unique approach combines AI technology with human expertise to ensure that every hire is a perfect fit.
      </p>

      <h2 className="text-2xl font-bold mt-10">Turing Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Jonathan Eslin</h3>
          <p className="text-gray-400">CEO & Founder</p>
          <p className="text-gray-300 mt-2">Expert in AI and machine learning.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Vijay Kannan</h3>
          <p className="text-gray-400">COO</p>
          <p className="text-gray-300 mt-2">Specializes in operations and strategy.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Alicia Huthran</h3>
          <p className="text-gray-400">CTO</p>
          <p className="text-gray-300 mt-2">Expert in software development and architecture.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10">Our Milestones</h2>
      <div className="mt-4">
        <ul className="list-disc list-inside text-gray-300">
          <li>2018: Founded Turing</li>
          <li>2019: Launched our first product</li>
          <li>2020: Expanded to international markets</li>
          <li>2021: Reached 1,000 successful placements</li>
          <li>2022: Introduced AI-driven matching technology</li>
          <li>2023: Partnered with leading tech companies</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-10">Our Awards and Accolades</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="font-bold">Forbes</h3>
          <p className="text-gray-400">Best Startup of 2022</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="font-bold">Fast Company</h3>
          <p className="text-gray-400">Most Innovative Company 2023</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="font-bold">Deloitte</h3>
          <p className="text-gray-400">Fastest Growing Tech Company 2023</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10">Ways to Engage with Turing</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
          <h3 className="font-bold">Start Your Journey</h3>
          <p>Innovate your business with AI-powered talent.</p>
        </div>
        <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg">
          <h3 className="font-bold">Work at Turing</h3>
          <p>Join our AI infrastructure company.</p>
        </div>
        <div className="bg-purple-600 text-white p-4 rounded-lg shadow-lg">
          <h3 className="font-bold">Partner with Us</h3>
          <p>Get matched to high-paying jobs.</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col gap-6 items-center justify-center bg-black text-white p-6 mt-auto">
        <div className="flex flex-wrap justify-center gap-16">
          <div>
            <h4 className="font-bold">Product</h4>
            <ul className="mt-2">
              <li>Features</li>
              <li>Security</li>
              <li>Mobile App</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Company</h4>
            <ul className="mt-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates and features.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 p-2 rounded border border-gray-300"
            />
            <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="text-sm">Privacy Policy | Terms of Service | Cookie Policy</div>
          <div className="text-sm">© 2025 Turing. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage; 