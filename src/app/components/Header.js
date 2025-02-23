"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-2 shadow-md hover:shadow-blue-400 bg-black/90 backdrop-blur-lg border-b border-blue-600">
      <div className="flex items-center space-x-3">
        <img src="/OnlyLogo.png" alt="Logo" className="h-10 w-10 rounded-lg shadow-lg hover:scale-105 transition-transform" />
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-700 transition-all">
          MJX LABS
        </Link>
      </div>
      <nav className="flex items-center space-x-6">
        <div className="relative group">
          <button className="px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300 hover:text-blue-600">
            What we do
          </button>
          <div className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/custom-software-development" className="block text-gray-300 hover:text-white">Custom Software Development</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/mobile-app-development" className="block text-gray-300 hover:text-white">Mobile App Development</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/ai-machine-learning" className="block text-gray-300 hover:text-white">AI & Machine Learning Solutions</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/cloud-devops" className="block text-gray-300 hover:text-white">Cloud Solutions & DevOps</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/e-commerce" className="block text-gray-300 hover:text-white">E-commerce Solutions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <button className="px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300 hover:text-blue-600">
            For talent
          </button>
          <div className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/how-to-get-hired" className="block text-gray-300 hover:text-white">How to get hired</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/developer-resources" className="block text-gray-300 hover:text-white">Developer resources</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/talent-support" className="block text-gray-300 hover:text-white">Talent support</Link>
              </li>
            </ul>
          </div>
        </div>

        <Link href="/blog" className="px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300 hover:text-blue-600">Blog</Link>
        <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300 hover:text-blue-600">About us</Link>
        <Link href="/pricing" className="px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300 hover:text-blue-600">Pricing</Link>
        <Link href="/contact" className="px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300 hover:text-blue-600">Contact Us</Link>
      </nav>
    </header>
  );
}