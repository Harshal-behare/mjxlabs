import Image from "next/image";
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="relative w-full h-96">
          <div className="relative inset-0 z-0">
            <Image src="/image2.webp" alt="Hero Image" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="relative z-10 flex flex-col items-start justify-center h-full text-white p-8 bg-gradient-to-r from-black/50 to-transparent">
            <h1 className="text-5xl font-extrabold animate-fade-in items-end">Turn AGI research into real-world impact</h1>
            <p className="mt-4 text-xl animate-slide-up">Advance AI from research to enterprise scale. Deliver measurable outcomes with cutting-edge intelligence.</p>
            <div className="mt-6">
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-transform transform hover:scale-105">Get Started</Link>
            </div>
            
          </div>
          
        </div>

        {/* Key Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/20 border border-gray-700/50 backdrop-blur-sm">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">Expertise</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">Industry experts with years of experience.</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/20 border border-gray-700/50 backdrop-blur-sm">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">Cost Efficiency</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">High-quality solutions at competitive prices.</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/20 border border-gray-700/50 backdrop-blur-sm">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">Global Reach</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">Services available worldwide for accessibility.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 text-left w-full">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-500/10 group">
              <div className="mb-4">
                <Image src="/testimonial1.webp" alt="Client" width={60} height={60} className="rounded-full ring-2 ring-blue-500/30 group-hover:ring-blue-500/70 transition-all" />
              </div>
              <p className="text-gray-300 italic text-lg leading-relaxed">"MJX LABS transformed our business with their innovative AI solutions. The results exceeded our expectations!"</p>
              <div className="mt-4 flex items-center">
                <div>
                  <p className="font-semibold text-blue-400">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">CEO, Tech Innovations</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:shadow-purple-500/10 group">
              <div className="mb-4">
                <Image src="/testimonial2.webp" alt="Client" width={60} height={60} className="rounded-full ring-2 ring-purple-500/30 group-hover:ring-purple-500/70 transition-all" />
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
                <Image src="/testimonial3.webp" alt="Client" width={60} height={60} className="rounded-full ring-2 ring-indigo-500/30 group-hover:ring-indigo-500/70 transition-all" />
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
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-500/10 group">
              <h3 className="text-2xl font-bold text-blue-400">Project Alpha</h3>
              <p className="mt-2 text-gray-400">A cutting-edge AI solution for data analysis.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:shadow-purple-500/10 group">
              <h3 className="text-2xl font-bold text-purple-400">Project Beta</h3>
              <p className="mt-2 text-gray-400">An innovative mobile app for e-commerce.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/10 group">
              <h3 className="text-2xl font-bold text-indigo-400">Project Gamma</h3>
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
