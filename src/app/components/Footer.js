"use client";

import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer; 