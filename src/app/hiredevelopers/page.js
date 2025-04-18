'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useEffect } from "react"
import Link from 'next/link';

export default function SoftwareDevelopersPage() {
  
  

  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center bg-black">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            Hire <span className="text-blue-500">Software Developers</span> As Per Your Need
          </h1>
          <p className="text-gray-400 mt-4 mb-12 text-sm md:text-base">
            Hire Certified Developers To Build Scalable, Secure And Customized Applications That Meet Your Business
            Needs
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between bg-black py-4">
            <div>
              <h3 className="text-2xl text-blue-500 font-bold">Have a project in mind?</h3>
              <p className="text-xl font-semibold text-white">Let's Connect</p>
            </div>
            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center mt-4 md:mt-0">
              Get in touch 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        <img src="/Hire Developer.png" alt="React" className="h-1/2 w-1/2" />
        
      </section>

      {/* Why Choose Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Choose MJX Labs For Your Project?
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          We Design Interactive Websites And Apps To Delight Your Users, Build Brand Trust And Improve Your Business Success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="border p-6 rounded-lg">
            <div className="mb-4 flex justify-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">2+</h3>
            <p className="text-gray-600">Years Of Experience</p>
          </div>
          
          <div className="border p-6 rounded-lg">
            <div className="mb-4 flex justify-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">10+</h3>
            <p className="text-gray-600">Products Delivered</p>
          </div>
          
          <div className="border p-6 rounded-lg">
            <div className="mb-4 flex justify-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">2+</h3>
            <p className="text-gray-600">No/Code Products Delivered</p>
          </div>
          
          <div className="border p-6 rounded-lg">
            <div className="mb-4 flex justify-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">5+</h3>
            <p className="text-gray-600">Team Members</p>
          </div>
        </div>

        <div className="mb-12">
          <div className="border p-6 rounded-lg max-w-xs mx-auto">
            <div className="mb-4 flex justify-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">10+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>

        <Link href="/about">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-300">
            About Us
          </button>
        </Link>
      </section>

     
      {/* Technologies We Work On Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies We Work On</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">Our highly skilled development team brings technical expertise across diverse technologies to unlock the full potential of your services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NoCode Developers",
                technologies: [
                  { name: "WeWeb", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a935f12d43a48c71c6_6706269600236fccd3565849_Frame(4).svg" },
                  { name: "Webflow", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a9d4b1d776a61be1e5_670626878755a96f4ce92d08_webflow-svgrepo-com%25201.svg" },
                  { name: "Bubble", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a9ecf082b10b9c03ce_670626a26f3052c5cdc3ec17_Layer_1(1).svg" },
                  { name: "FlutterFlow", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949acbec428850691b5e3_6706221743b3f70392989948_logo.svg" },
                  { name: "Xano", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ae9ee0061b839dcf78_6704dce5f59457ec07efff39_Clip%2520path%2520group.svg" }
                ]
              },
              {
                title: "Mobile App Developers",
                technologies: [
                  { name: "Android", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949adfd46d5e054ea2eef_670621e7294de62c5858bf1c_Frame.svg" },
                  { name: "iOS", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ad883d6937367c5a2b_670621f07cc67b505fc3eb22_Apple_iOS_logo%25201.svg" },
                  { name: "React Native", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ad69b1360653d9d86b_6704dd0be6501c1451081a29_logo-react-svgrepo-com%25201.svg" },
                  { name: "Flutter", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949aeba4b046a938d9426_66fe93e4b25e3d5286729b56_image%2520115.svg" }
                ]
              },
              {
                title: "Frontend Developers",
                technologies: [
                  { name: "Angular", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a5b9e1eff9a1d3da09_6706297d85f16a427e3e6be0_angular_logo.svg.svg" },
                  { name: "React.js", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ad69b1360653d9d86b_6704dd0be6501c1451081a29_logo-react-svgrepo-com%25201.svg" },
                  { name: "NextJS", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ae6661ce9bbe57e85a_66fe93eeddf5ee9b84352c2d_image%2520116.svg" },
                  { name: "Vue", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/6799dc6208a8fb423d77fb19_Group%20(1).svg" }
                ]
              },
              {
                title: "Back-End Developers",
                technologies: [
                  { name: "Firebase", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949abc032e07710780513_670622d5975b419ee4f5b0b0_firebase-svgrepo-com%25201.svg" },
                  { name: "Node.js", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ac5b705cda9d7a3c4d_67062273e180bf664baff4fd_nodejs-logo-svgrepo-com%25201.svg" },
                  { name: "Laravel", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a5edbfe289d2294c18_6706294d8755a96f4cec0de6_laravel-wordmark-1%25201.svg" },
                  { name: "Java", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/6799dcd99d3e7d527d33cb38_java%201%20(1).svg" }
                ]
              },
              {
                title: "CMS & E-Commerce Developers",
                technologies: [
                  { name: "Shopify", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a112a05875201c934e_676551817ac04b208afe7a12_Symbol.svg.svg" },
                  { name: "WooCommerce", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/6799dcb516b641af20bf23d2_Frame%201272628620.svg" },
                  { name: "WordPress", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/6799db07e9704c5e19cdb55e_Group.svg" },
                  { name: "Webflow", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a9d4b1d776a61be1e5_670626878755a96f4ce92d08_webflow-svgrepo-com%25201.svg" }
                ]
              },
              {
                title: "AI Developers",
                technologies: [
                  { name: "Whisper", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a9a75dc198b9989ea5_670626f0e35b6cf9d19048b7_whisper-ai-logo-vector%25201.svg" },
                  { name: "LangChain", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a7bf1c60d85e6431b2_670627121cae83f1534aa87e_langchain-seeklogo%25201.svg" },
                  { name: "Chatgpt", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/6799dd56bb81275ca46db3f4_bubble_symbol.svg.svg" },
                  { name: "AI engineer", icon: "https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/677bc6f0345804dec4dd3a95_Frame%201272628614.svg" }
                ]
              }
            ].map((category) => (
              <div key={category.title} className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-white text-center font-medium mb-8">{category.title}</h3>
                <div className="grid grid-cols-4 gap-4">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center">
                      <img src={tech.icon} alt={tech.name} className="h-8 mb-2" />
                      <span className="text-xs text-gray-500">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
         

      {/* Partner With Unico Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Partner With MJX Labs For Seamless Development</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="bg-blue-500 text-white rounded-full px-3 py-1 text-xs inline-block mb-2">STEP 1</div>
              <h3 className="font-bold mb-2">Project Discovery</h3>
              <p className="text-sm text-gray-600">We discuss your project and collaboration opportunities</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="bg-blue-500 text-white rounded-full px-3 py-1 text-xs inline-block mb-2">STEP 2</div>
              <h3 className="font-bold mb-2">Talent Alignment</h3>
              <p className="text-sm text-gray-600">We get you with developers suited to your needs</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="bg-blue-500 text-white rounded-full px-3 py-1 text-xs inline-block mb-2">STEP 3</div>
              <h3 className="font-bold mb-2">Onboarding</h3>
              <p className="text-sm text-gray-600">Developers start work after thorough approval</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="bg-blue-500 text-white rounded-full px-3 py-1 text-xs inline-block mb-2">STEP 4</div>
              <h3 className="font-bold mb-2">Flexible Scaling</h3>
              <p className="text-sm text-gray-600">Easily scale your team with our support</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-white py-4">
            <div>
              <h3 className="text-2xl text-blue-500 font-bold">Have a project in mind?</h3>
              <p className="text-xl font-semibold">Let's Connect</p>
            </div>
            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center mt-4 md:mt-0">
              Get in touch 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Dedicated Team Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Scale your Business With Our Dedicated Team Of Developers</h2>
          <p className="text-center text-sm mb-12">We Take Our Developers Very Seriously For Excellence Technologies And Teams.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6 text-black">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Highly Talented Team</h3>
              <p className="text-sm text-gray-600">We hand-pick a skilled pool of developers for you to review the best candidates for your project.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6 text-black">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Different Engagement Models</h3>
              <p className="text-sm text-gray-600">We will provide a selection of developers for you to follow the most suitable model for your requirements.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-6 text-black">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Integrity & Transparency</h3>
              <p className="text-sm text-gray-600">We will provide a selection of developers for you to review the best candidates for your project.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 4 */}
            <div className="bg-white rounded-lg p-6 text-black">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Updated with Latest Technology</h3>
              <p className="text-sm text-gray-600">We will provide a selection of developers for you to review the best candidates for your project.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg p-6 text-black">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Agile & Adaptive Development</h3>
              <p className="text-sm text-gray-600">We will provide a selection of developers for you to follow the most suitable model for your project.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg p-6 text-black">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Quality Delivery in Defined Time</h3>
              <p className="text-sm text-gray-600">We have built teams of top developers globally who will rapidly solve complex challenges and meet high-quality standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}