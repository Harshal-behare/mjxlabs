"use client";

import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import BlogsSection from "./blog/BlogSectionForHome";

export default function Home() {
  const clients = [
    { name: "Google", logo: "/Clients/logo.png", demo: "https://google.com" },
    { name: "Microsoft", logo: "/Clients/logo2.jpeg", demo: "https://microsoft.com" },
    { name: "Amazon", logo: "/Clients/image.png", demo: "https://amazon.com" },
    { name: "IBM", logo: "/Clients/logo3.png", demo: "https://ibm.com" },
    { name: "Tesla", logo: "/Clients/logo.png", demo: "https://tesla.com" },
    { name: "Meta", logo: "/Clients/logo.png", demo: "https://meta.com" },
    { name: "Apple", logo: "/Clients/logo.png", demo: "https://apple.com" },
    { name: "Netflix", logo: "/Clients/logo.png", demo: "https://netflix.com" },
    { name: "Netflix", logo: "/Clients/logo.png", demo: "https://netflix.com" }
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const clone = marquee.cloneNode(true);
    marquee.parentNode.appendChild(clone);

    const totalWidth = marquee.scrollWidth;
    const duration = totalWidth / 50; // Adjust speed by changing the divisor

    marquee.style.animation = `marquee ${duration}s linear infinite`;
    clone.style.animation = `marquee ${duration}s linear infinite`;

    return () => {
      marquee.style.animation = '';
      clone.style.animation = '';
    };
  }, []);

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

        {/* Trusted Clients Section */}
        <div className="mt-16 w-full overflow-hidden">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Trusted By Industry Leaders</h2>
          <div className="relative w-full h-32 overflow-hidden">
            <style jsx>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
              }
              .marquee-container {
                display: flex;
                width: max-content;
                animation: marquee 20s linear infinite;
              }
              .marquee-item {
                flex: 0 0 auto;
                margin: 0 2rem;
              }
            `}</style>
            <div className="marquee-container">
              {[...clients, ...clients].map((client, index) => (
                <a
                  key={index}
                  href={client.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="marquee-item p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800/50 hover:scale-105 transition-transform duration-300"
                >
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    width={120} 
                    height={40} 
                    className="w-full h-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <BlogsSection />

        <WhatsAppButton />
      </div>
    </>
  );
}
