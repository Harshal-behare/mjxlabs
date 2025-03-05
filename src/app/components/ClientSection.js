"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const ClientSection = () => {
  const clients = [
    { name: "AimFitness", logo: "/Clients/logo.png" },
    { name: "Ministry of Defence", logo: "/Clients/logo2.jpeg" },
    { name: "Vibe N Venture", logo: "/Clients/image.png" },
    { name: "Pure Technology", logo: "/Clients/logo3.png" },
    { name: "Bombay Forum", logo: "/Clients/BombayForum.jpg" },
    { name: "Pune Express", logo: "/Clients/PuneExpress.jpg" },
    { name: "Bird Earner", logo: "/Clients/birdEarner.png" },
    { name: "Alchemy Events", logo: "/Clients/alchemy.jpg" }
  ];

  return (
    <div className="bg-black text-white py-20 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Modern Infinite Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-slide">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-none mx-8 w-[200px] p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="h-20 relative">
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-none mx-8 w-[200px] p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="h-20 relative">
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent top-1/4 -translate-x-1/2 animate-[moveRight_8s_linear_infinite]"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent top-2/4 translate-x-1/2 animate-[moveLeft_8s_linear_infinite]"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent top-3/4 -translate-x-1/4 animate-[moveRight_8s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export default ClientSection; 