"use client";

import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start bg-black justify-center min-h-screen p-8 pb-12 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <div className=" flex items-center justify-center bg-black text-white p-20 pl-0">
          <div className="max-w-4xl mx-auto p-2">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative inset-0 z-0">
                <Image src="/image2.webp" alt="Hero Image" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <div className="flex-1">
                <h1 className="text-5xl font-bold mb-4">
                  Empowering Businesses with AI Innovation
                </h1>
                <p className="text-lg mb-6">
                  From research to real-world implementation, we develop AI-driven solutions that enhance efficiency, scalability, and profitability.
                </p>
                <Link href="/get-started" className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-12 py-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-2xl">
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
          <div className="p-8 bg-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500 shadow-lg border border-white backdrop-blur-sm">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 text-white">Cutting-Edge Expertise</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">Industry leaders in AI research & enterprise deployment</p>
          </div>
          <div className="p-8 bg-black rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500 border border-white backdrop-blur-sm">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 text-white">Affordable & Scalable</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">Cost-effective AI solutions for businesses of all sizes</p>
          </div>
          <div className="p-8 bg-black rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-400 border border-white backdrop-blur-sm">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 text-white">Global AI Integration</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">AI solutions accessible & adaptable across industries worldwide</p>
          </div>
        </div>

        {/* Trusted Clients Section */}
        {/* <div className="mt-16 w-full">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Trusted By Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800/50">
              <Image src="/Clients/logo.png" alt="Google" width={120} height={40} className="w-full h-auto" />
            </div>
            <div className="p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800/50">
              <Image src="/Clients/logo2.jpeg" alt="Microsoft" width={120} height={40} className="w-full h-auto" />
            </div>
            <div className="p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800/50">
              <Image src="/Clients/image.png" alt="Amazon" width={120} height={40} className="w-full h-auto" />
            </div>
            <div className="p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800/50">
              <Image src="/Clients/logo3.png" alt="IBM" width={120} height={40} className="w-full h-auto" />
            </div>
          </div>
        </div> */}

        {/* Testimonials Section */}
        <div className="mt-16 text-left w-full">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-500/10 group">
              <div className="mb-4">
                <Image src="/people/person2.png" alt="Client" width={60} height={60} className="rounded-full ring-2 ring-blue-500/30 group-hover:ring-blue-500/70 transition-all" />
              </div>
              <p className="text-gray-300 italic text-lg leading-relaxed">"MJX LABS transformed our business with their innovative AI solutions. The results exceeded our expectations!"</p>
              <div className="mt-4 flex items-center">
                <div>
                  <p className="font-semibold text-blue-400">Emily jhonson</p>
                  <p className="text-sm text-gray-500">CEO, Tech Innovations</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:shadow-purple-500/10 group">
              <div className="mb-4">
                <Image src="/people/person1.png" alt="Client" width={60} height={60} className="rounded-full ring-2 ring-purple-500/30 group-hover:ring-purple-500/70 transition-all" />
              </div>
              <p className="text-gray-300 italic text-lg leading-relaxed">"Their expertise in machine learning has given us a competitive edge in the market. Truly outstanding work!"</p>
              <div className="mt-4 flex items-center">
                <div>
                  <p className="font-semibold text-purple-400">Mark Smith</p>
                  <p className="text-sm text-gray-500">Founder, Future Tech</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/10 group">
              <div className="mb-4">
                <Image src="/people/person2.png" alt="Client" width={60} height={60} className="rounded-full ring-2 ring-indigo-500/30 group-hover:ring-indigo-500/70 transition-all" />
              </div>
              <p className="text-gray-300 italic text-lg leading-relaxed">"The cloud solutions implemented by MJX LABS helped us scale our operations seamlessly. Highly recommended!"</p>
              <div className="mt-4 flex items-center">
                <div>
                  <p className="font-semibold text-indigo-400">Emily Chen</p>
                  <p className="text-sm text-gray-500">CTO, Cloud Systems Inc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WhatsAppButton />
      </div>
    </>
  );
}
