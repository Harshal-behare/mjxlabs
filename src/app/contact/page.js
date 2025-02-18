"use client";

import React from "react";


const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      
      <div className="flex flex-col items-center justify-center py-20 px-5">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-400">Have any questions? We'd love to hear from you.</p>
        
        <form className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md mt-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Your Inquiry</label>
            <select className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white">
              <option>Select...</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Partnership</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">How can we help you?</label>
            <textarea
              placeholder="I would like to know about..."
              className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white"
              rows="4"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <h2 className="text-lg font-bold">Have general questions?</h2>
          <p className="text-gray-400">Check our FAQs</p>
          <p className="text-gray-400">Customer support: support@mjxlabs.com</p>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs; 