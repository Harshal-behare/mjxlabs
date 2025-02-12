"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Tagline Section */}
        <div className="flex flex-col mb-6">
          <img src="/logo.svg" alt="Logo" className="w-24 h-auto mb-2" />
          <h2 className="text-lg font-bold">MJX LABS</h2>
          <p className="text-sm text-gray-400">We build your dreams</p>
        </div>
        <div className="flex flex-col mb-6">
          <h4 className="font-bold text-lg">Product</h4>
          <ul className="mt-2">
            <li><Link href="#" className="hover:underline">Features</Link></li>
            <li><Link href="#" className="hover:underline">Security</Link></li>
            <li><Link href="#" className="hover:underline">Mobile App</Link></li>
            <li><Link href="#" className="hover:underline">Pricing</Link></li>
          </ul>
        </div>
        <div className="flex flex-col mb-6">
          <h4 className="font-bold text-lg">Company</h4>
          <ul className="mt-2">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div className="flex flex-col mb-6">
          <h4 className="font-bold text-lg">Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest updates and features.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 p-2 rounded border border-gray-300 text-black"
          />
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="text-sm">© 2025 MJX LABS. All rights reserved.</div>
        <div className="flex space-x-4 mt-2">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          <Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4">
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
        </Link>
        <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer; 