"use client";

import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import BlogsSection from "./blog/BlogSectionForHome";
import ClientSection from './components/ClientSection';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start bg-black justify-center min-h-screen p-8 pb-12 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex items-center justify-center bg-black text-white p-20 pl-0">
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
                <Link href="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-2xl">
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

        {/* Client Section */}
        <ClientSection />

        {/* Blog Section */}
        <BlogsSection />

        <WhatsAppButton />
      </div>
    </>
  );
}
