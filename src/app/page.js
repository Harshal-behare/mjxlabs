import Image from "next/image";
import Link from 'next/link';
import React from 'react';


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="relative w-full h-96">
          <Image src="/image2.webp" alt="Hero Image" layout="fill" objectFit="cover" className="rounded-lg" />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-8">
            <h1 className="text-6xl font-extrabold">Turn AGI research into real-world impact</h1>
            <p className="mt-4 text-xl">Advance AI from research to enterprise scale. Deliver measurable outcomes with cutting-edge intelligence.</p>
            <div className="mt-6">
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Get Started</Link>
            </div>
          </div>
        </div>

        {/* Key Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold">Expertise</h2>
            <p className="mt-2 text-gray-400">Industry experts with years of experience.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold">Cost Efficiency</h2>
            <p className="mt-2 text-gray-400">High-quality solutions at competitive prices.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold">Global Reach</h2>
            <p className="mt-2 text-gray-400">Services available worldwide for accessibility.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-10 text-left w-full">
          <h2 className="text-4xl font-bold">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row justify-start mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-xs">
              <p className="text-gray-400">"MJX LABS transformed our business with their innovative solutions!"</p>
              <p className="mt-2 font-bold">- Sarah Johnson, CEO of Tech Innovations</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-xs">
              <p className="text-gray-400">"Their expertise in AI has given us a competitive edge!"</p>
              <p className="mt-2 font-bold">- Mark Smith, Founder of Future Tech</p>
            </div>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div className="mt-10 text-left w-full">
          <h2 className="text-4xl font-bold">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Project Alpha</h3>
              <p className="mt-2 text-gray-400">A cutting-edge AI solution for data analysis.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Project Beta</h3>
              <p className="mt-2 text-gray-400">An innovative mobile app for e-commerce.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Project Gamma</h3>
              <p className="mt-2 text-gray-400">A comprehensive cloud solution for businesses.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/portfolio" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">View Our Portfolio</Link>
        </div>
      </div>
    </>
  );
}
