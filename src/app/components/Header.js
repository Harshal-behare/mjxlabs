"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <Link href="/" className="text-2xl font-bold">TURING</Link>
      <nav className="flex space-x-4">
        <Link href="#" className="hover:underline">What we do</Link>
        <Link href="#" className="hover:underline">Resources</Link>
        <Link href="#" className="hover:underline">For talent</Link>
        <Link href="/about" className="hover:underline">About us</Link>
        <Link href="/contact" className="hover:underline">Contact Us</Link>
      </nav>
      <div className="relative">
        <Link href="/get-started" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Get Started
        </Link>
        <button 
          onClick={toggleDropdown} 
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
        >
          Login
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/clients">For clients</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="#">For developers</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
} 