import Image from "next/image";
import Link from 'next/link';
import React from 'react';

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
                Empowering Businesses with   <br /> AI Innovation
                </h1>
                <p className="text-lg mb-6">
                From research to real-world implementation, we develop AI-driven solutions that enhance efficiency, scalability, and profitability.
                </p>
                <Link href="/get-started" className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-black  hover:shadow-yellow-600 shadow-xl px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
          <div className="p-8 bg-black rounded-xl  transition-all duration-300 hover:scale-105 hover:shadow-slate-500 shadow-xl border border-white backdrop-blur-sm">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 text-white">Cutting-Edge Expertise</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">Industry leaders in AI research & enterprise deployment</p>
          </div>
          <div className="p-8 bg-black rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500 border border-white backdrop-blur-sm">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 text-white">Affordable & Scalable</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">Cost-effective AI solutions for businesses of all sizes</p>
          </div>
          <div className="p-8 bg-black rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500 border border-white backdrop-blur-sm">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 text-white">Global AI Integration</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">AI solutions accessible & adaptable across industries worldwide</p>
          </div>
        </div>

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
        {/* Recent Projects Section */}
        <div className="mt-10 text-left w-full">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-500/10 group">
              <h3 className="text-2xl font-bold text-white">Project Alpha</h3>
              <p className="mt-2 text-gray-400">A cutting-edge AI solution for data analysis.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:shadow-purple-500/10 group">
              <h3 className="text-2xl font-bold text-white">Project Beta</h3>
              <p className="mt-2 text-gray-400">An innovative mobile app for e-commerce.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-gray-700/30 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/10 group">
              <h3 className="text-2xl font-bold text-white">Project Gamma</h3>
              <p className="mt-2 text-gray-400">A comprehensive cloud solution for businesses.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/portfolio" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 font-semibold">
            View Our Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
