"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const socialMediaIcons = {
    twitter: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    linkedin: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    youtube: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    instagram: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white border-t border-t-white py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-4">
          <img src="/OnlyLogo.png" alt="Logo" className="w-24 h-auto" />
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-600  ">
          MJX LABS
        </Link>
          <p className="text-gray-400">We build your dreams</p>
        </div>

        {/* Product Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Product</h4>
          <ul className="space-y-2">
            <li><Link href="/feature" className="hover:text-blue-500 transition-colors">Features</Link></li>
            <li><Link href="/security" className="hover:text-blue-500 transition-colors">Security</Link></li>
            <li><Link href="/mobile-app" className="hover:text-blue-500 transition-colors">Mobile App</Link></li>
            <li><Link href="/pricing" className="hover:text-blue-500 transition-colors">Pricing</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-blue-500 transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-blue-500 transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Stay Updated
          </h4>
          <p className="text-gray-400">Subscribe to our newsletter for the latest updates and features.</p>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between space-y极4 md:space-y-0">
        <div className="text-sm text-gray-400">
          © 2025 MJX LABS. All rights reserved.
        </div>
        
        <div className="flex space-x-4">
          <Link href="/terms-of-service" className="text-gray-400 hover:text-blue-500 transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-500 transition-colors">
            Privacy Policy
          </Link>
        </div>

        <div className="flex space-x-4">
          {/* Social Icons */}
          {Object.entries(socialMediaIcons).map(([platform, iconUrl]) => (
            <Link
              key={platform}
              href={`https://${platform}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <img 
                src={iconUrl}
                alt={platform.charAt(0).toUpperCase() + platform.slice(1)} 
                className="w-6 h-6"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mt-8 text-sm pl-16 text-gray-400">
        Made with Passion and MJXLABS
      </div>
    </footer>
  );
};

export default Footer;