"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <Link href="/" className="text-xl font-bold px-20 ml-2">MJX LABS</Link>
      <nav className="flex space-x-4 gap-2 mr-10">
        <div className="relative group">
          <button className="hover:">What we do</button>
          <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        </div>

        <div className="relative group">
          <button className="hover:">For talent</button>
          <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        </div>

        <div className="relative group">
          <button className="hover:">Resources</button>
          <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="/more-resources">More Resources</Link>
              </li>
              
            </ul>
          </div>
        </div>

        <Link href="/about" className="hover:text-blue-500">About us</Link>
        <Link href="/pricing" className="hover:text-blue-500">Pricing</Link>
        <Link href="/contact" className="hover:text-blue-500">Contact Us</Link>
      </nav>
      {/* <div className="relative px-12 flex justify-between items-center gap-1">
      <Link href="/login" className="bg-gray-700 text-sm px-2 py-1 rounded-3xl hover:bg-gray-600 border-slate-400 border-2">
          SIGN IN
        </Link>
        <Link href="/get-started" className="bg-blue-500 text-white text-sm px-4 py-1 rounded-3xl border-slate-400 hover:bg-blue-600 border-2">
          GET STARTED
        </Link>
       
      </div> */}
    </header>
  );
} 