"use client";

import React from "react";

const Capabilities = () => {
  return (
    <div className="bg-transparent py-20 text-white ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Our Capabilities
        </h2>
        <p className="text-center text-lg mb-16">
          We Craft Exceptional Websites And Apps Entirely In-House, Ensuring End-To-End Precision And Uncompromising Excellence
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className=" p-3 rounded-full">
              <img src="/capability/img5.svg" alt="Expertise" className="h-14 w-14" />
            </div>
            <div>
              <h3 className="font-bold">Unmatched IT Expertise</h3>
              <p className="text-gray-400">We deliver a versatile and professional approach, finely tuned to meet the unique needs of every client.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full">
              <img src="/capability/img2.svg" alt="Solutions" className="h-14 w-14" />
            </div>
            <div>
              <h3 className="font-bold">Value-Driven Solutions</h3>
              <p className="text-gray-400">Our team ensures optimal outcomes, providing exceptional results for every dollar invested.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className=" p-3 rounded-full">
              <img src="/capability/img1.svg" alt="Execution" className="h-14 w-12" />
            </div>
            <div>
              <h3 className="font-bold">Rapid Execution</h3>
              <p className="text-gray-400">From aligned expectations to swift development, we prioritize efficiency at every step.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className=" p-3 rounded-full">
              <img src="/capability/img6.svg" alt="Leadership" className="h-14 w-14" />
            </div>
            <div>
              <h3 className="font-bold">Established Leadership</h3>
              <p className="text-gray-400">With over 10+ years of proven experience, we stand as trusted innovators in the industry.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className=" p-3 rounded-full">
              <img src="/capability/img4.svg" alt="Excellence" className="h-14 w-14" />
            </div>
            <div>
              <h3 className="font-bold">On-Time Excellence</h3>
              <p className="text-gray-400">Clear communication and diligent planning ensure every project is delivered on schedule.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className=" p-3 rounded-full">
              <img src="/capability/img3.svg" alt="Partnership" className="h-14 w-14" />
            </div>
            <div>
              <h3 className="font-bold">Reliable Partnership</h3>
              <p className="text-gray-400">Unico Connect Solutions offers steadfast, responsive support you can depend on, every time.</p>
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="flex items-center justify-between mt-16 bg-gray-800 p-6 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold text-blue-400">Have a project in mind?</h2>
            <h3 className="text-lg text-white">Let's Connect</h3>
          </div>
          <a href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
            Let's Talk →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;