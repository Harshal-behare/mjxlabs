"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhatsAppButton from "./components/WhatsAppButton";
import BlogsSection from "./blog/BlogSectionForHome";
import ClientSection from "./components/ClientSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start bg-black justify-center min-h-screen px-4 sm:px-8 lg:px-20 py-12 gap-8 sm:gap-10 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col items-center justify-center w-full bg-black text-white h-screen relative">
          <div className="w-full h-full max-w-none relative">
            <Image
              src="/image2.webp"
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="brightness-50 scale-x-[-1]"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-r from-black/90 to-transparent">
              <div className="text-left max-w-2xl px-6 space-y-8 ml-4 sm:ml-8 lg:ml-20">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-2xl">
                  Empowering Businesses with AI Innovation
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  From research to real-world implementation, we develop
                  AI-driven solutions that enhance efficiency, scalability, and
                  profitability.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-xl hover:scale-105 hover:shadow-orange-500/20"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left w-full">
          <div className="p-6 md:p-8 bg-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500 shadow-lg border border-white backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
              Cutting-Edge Expertise
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
              Industry leaders in AI research & enterprise deployment
            </p>
          </div>
          <div className="p-6 md:p-8 bg-black rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500 border border-white backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
              Affordable & Scalable
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
              Cost-effective AI solutions for businesses of all sizes
            </p>
          </div>
          <div className="p-6 md:p-8 bg-black rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-400 border border-white backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
              Global AI Integration
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
              AI solutions accessible & adaptable across industries worldwide
            </p>
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
