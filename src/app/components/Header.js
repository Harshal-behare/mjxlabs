"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown); // Close if the same dropdown is clicked
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <Link href="/" className="text-2xl font-bold ml-30">MJX LABS</Link>
      <nav className="flex space-x-4">
        
        <div className="relative">
          <button onClick={() => toggleDropdown('services')} className="hover:underline">
            What we do
          </button>
          {openDropdown === 'services' && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/services/custom-software-development">Custom Software Development</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/services/mobile-app-development">Mobile App Development</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/services/ai-machine-learning">AI & Machine Learning Solutions</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/services/cloud-devops">Cloud Solutions & DevOps</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/services/e-commerce">E-commerce Solutions</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <button onClick={() => toggleDropdown('talent')} className="hover:underline">For talent</button>
          {openDropdown === 'talent' && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/how-to-get-hired">How to get hired</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/developer-resources">Developer resources</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/talent-support">Talent support</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative group">
          <button className="hover:underline">
            Resources
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="/docs">Docs</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="/changelog">Changelog</Link>
              </li>
            </ul>
          </div>
        </div>
        <Link href="/about" className="hover:underline">About us</Link>
        <Link href="/contact" className="hover:underline">Contact Us</Link>
      </nav>
      <div className="relative">
        <Link href="/get-started" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Get Started
        </Link>
        <button 
          onClick={() => toggleDropdown('login')} 
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
        >
          Login
        </button>
        {openDropdown === 'login' && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="/clients">For clients</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="#">For developers</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
} 