'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useEffect } from "react"

export default function SoftwareDevelopersPage() {
  
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      /* Base styles */
      body {
        color: rgb(255, 255, 255);
        background: rgb(0, 0, 0);
        margin: 0;
        font-family: 'Inter', sans-serif;
      }
      
      /* Hexagon styling */
      .hex-container {
        position: relative;
        width: 100%;
        padding-bottom: 86.6%; /* = 100% * sin(60°) */
        margin-bottom: -20%;
      }
      
      .hex {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: white;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      /* Utility classes */
      .bg-black { background-color: black; }
      .bg-white { background-color: white; }
      .text-white { color: white; }
      .text-black { color: black; }
      .text-gray-400 { color: #9ca3af; }
      .text-gray-600 { color: #4b5563; }
      .text-blue-500 { color: #0ea5e9; }
      .bg-blue-500 { background-color: #0ea5e9; }
      .bg-blue-50 { background-color: #f0f9ff; }
      .bg-blue-100 { background-color: #e0f2fe; }
      .hover\\:bg-blue-600:hover { background-color: #0284c7; }
      .bg-gray-50 { background-color: #f9fafb; }
      
      .flex { display: flex; }
      .grid { display: grid; }
      .hidden { display: none; }
      .items-center { align-items: center; }
      .justify-center { justify-content: center; }
      .justify-between { justify-content: space-between; }
      .flex-col { flex-direction: column; }
      .flex-row { flex-direction: row; }
      
      .text-xs { font-size: 0.75rem; }
      .text-sm { font-size: 0.875rem; }
      .text-base { font-size: 1rem; }
      .text-lg { font-size: 1.125rem; }
      .text-xl { font-size: 1.25rem; }
      .text-2xl { font-size: 1.5rem; }
      .text-3xl { font-size: 1.875rem; }
      .text-4xl { font-size: 2.25rem; }
      .text-5xl { font-size: 3rem; }
      
      .font-bold { font-weight: 700; }
      .font-medium { font-weight: 500; }
      
      .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
      .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
      .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
      .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
      .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
      .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
      .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
      
      .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
      .px-4 { padding-left: 1rem; padding-right: 1rem; }
      .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
      .px-8 { padding-left: 2rem; padding-right: 2rem; }
      .px-10 { padding-left: 2.5rem; padding-right: 2.5rem; }
      
      .p-3 { padding: 0.75rem; }
      .p-4 { padding: 1rem; }
      .p-6 { padding: 1.5rem; }
      .p-8 { padding: 2rem; }
      
      .m-0 { margin: 0; }
      .mx-auto { margin-left: auto; margin-right: auto; }
      .my-4 { margin-top: 1rem; margin-bottom: 1rem; }
      .mb-2 { margin-bottom: 0.5rem; }
      .mb-4 { margin-bottom: 1rem; }
      .mb-6 { margin-bottom: 1.5rem; }
      .mb-8 { margin-bottom: 2rem; }
      .mb-10 { margin-bottom: 2.5rem; }
      .mb-12 { margin-bottom: 3rem; }
      .mt-2 { margin-top: 0.5rem; }
      .mt-4 { margin-top: 1rem; }
      .ml-2 { margin-left: 0.5rem; }
      .ml-8 { margin-left: 2rem; }
      .ml-auto { margin-left: auto; }
      .mr-8 { margin-right: 2rem; }
      
      .space-x-4 > * + * { margin-left: 1rem; }
      .space-x-6 > * + * { margin-left: 1.5rem; }
      .space-y-2 > * + * { margin-top: 0.5rem; }
      .space-y-3 > * + * { margin-top: 0.75rem; }
      .space-y-4 > * + * { margin-top: 1rem; }
      .space-y-6 > * + * { margin-top: 1.5rem; }
      .gap-2 { gap: 0.5rem; }
      .gap-4 { gap: 1rem; }
      .gap-6 { gap: 1.5rem; }
      
      .rounded-md { border-radius: 0.375rem; }
      .rounded-lg { border-radius: 0.5rem; }
      .rounded-full { border-radius: 9999px; }
      
      .border-b { border-bottom-width: 1px; }
      .border-gray-800 { border-color: #1f2937; }
      
      .w-full { width: 100%; }
      .w-24 { width: 6rem; }
      .h-24 { height: 6rem; }
      .min-h-screen { min-height: 100vh; }
      
      .max-w-3xl { max-width: 48rem; }
      .max-w-4xl { max-width: 56rem; }
      .max-w-5xl { max-width: 64rem; }
      .max-w-6xl { max-width: 72rem; }
      
      .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
      .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
      
      .inline-block { display: inline-block; }
      .inline-flex { display: inline-flex; }
      
      .text-center { text-align: center; }
      .align-top { vertical-align: top; }
      
      .hover\\:underline:hover { text-decoration: underline; }
      .underline-offset-4 { text-underline-offset: 4px; }
      
      /* Media queries */
      @media (min-width: 768px) {
        .md\\:flex { display: flex; }
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .md\\:flex-row { flex-direction: row; }
        .md\\:w-1/2 { width: 50%; }
        .md\\:text-xl { font-size: 1.25rem; }
        .md\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .md\\:px-10 { padding-left: 2.5rem; padding-right: 2.5rem; }
        .md\\:px-12 { padding-left: 3rem; padding-right: 3rem; }
        .md\\:mt-0 { margin-top: 0; }
        .md\\:mb-0 { margin-bottom: 0; }
        .md\\:gap-12 { gap: 3rem; }
        .md\\:gap-16 { gap: 4rem; }
      }
      
      @media (min-width: 1024px) {
        .lg\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .lg\\:px-24 { padding-left: 6rem; padding-right: 6rem; }
        .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .lg\\:gap-10 { gap: 2.5rem; }
        .lg\\:gap-12 { gap: 3rem; }
        .lg\\:order-last { order: 9999; }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center bg-black">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            Hire <span className="text-blue-500">Software Developers</span> As Per Your Need
          </h1>
          <p className="text-gray-400 mt-4 mb-6 text-sm md:text-base">
            Hire Certified Developers To Build Scalable, Secure And Customized Applications That Meet Your Business
            Needs
          </p>
        </div>
        <img src="/Hire Developer.png" alt="React" className="h-1/2 w-1/2" />
        
      </section>

      {/* Why Choose Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Choose Unico Connect For Your Project?
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

        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-300">
          About Us
        </button>
      </section>

     
      {/* Technologies We Work On Section */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Technologies We Work On</h2>
          <p className="text-center text-sm mb-10">Our Highly Skilled Development Team Members Technical expertise for Diverse Exceptional Quality and always the Full Potential Of Your Services</p>

          {/* NoCode Developers */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-black text-center font-medium mb-8">NoCode Developers</h3>
            <div className="grid grid-cols-5 gap-4">
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a935f12d43a48c71c6_6706269600236fccd3565849_Frame(4).svg" alt="Wix" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">WeWeb</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a9d4b1d776a61be1e5_670626878755a96f4ce92d08_webflow-svgrepo-com%25201.svg" alt="Webflow" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Webflow</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a9ecf082b10b9c03ce_670626a26f3052c5cdc3ec17_Layer_1(1).svg" alt="Bubble" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Bubble</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949acbec428850691b5e3_6706221743b3f70392989948_logo.svg" alt="Plasmic" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">FlutterFlow</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ae9ee0061b839dcf78_6704dce5f59457ec07efff39_Clip%2520path%2520group.svg" alt="Xano" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Xano</span>
              </div>
            </div>
          </div>

          {/* Mobile App Developers */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-black text-center font-medium mb-8">Mobile App Developers</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949adfd46d5e054ea2eef_670621e7294de62c5858bf1c_Frame.svg" alt="Android" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Android</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ad883d6937367c5a2b_670621f07cc67b505fc3eb22_Apple_iOS_logo%25201.svg" alt="iOS" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">iOS</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ad69b1360653d9d86b_6704dd0be6501c1451081a29_logo-react-svgrepo-com%25201.svg" alt="React Native" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">React Native</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949aeba4b046a938d9426_66fe93e4b25e3d5286729b56_image%2520115.svg" alt="Flutter" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Flutter</span>
              </div>
            </div>
          </div>

          {/* Frontend Developers */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-black text-center font-medium mb-8">Frontend Developers</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a5b9e1eff9a1d3da09_6706297d85f16a427e3e6be0_angular_logo.svg.svg" alt="Angular" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Angular</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ad69b1360653d9d86b_6704dd0be6501c1451081a29_logo-react-svgrepo-com%25201.svg" alt="React Native" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">React.js</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ae6661ce9bbe57e85a_66fe93eeddf5ee9b84352c2d_image%2520116.svg" alt="React" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">NextJS</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/6799dc6208a8fb423d77fb19_Group%20(1).svg" alt="Vue" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Vue</span>
              </div>
            </div>
          </div>

          {/* Back-End Developers */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-black text-center font-medium mb-8">Back-End Developers</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949abc032e07710780513_670622d5975b419ee4f5b0b0_firebase-svgrepo-com%25201.svg" alt="Firebase" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Firebase</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ac5b705cda9d7a3c4d_67062273e180bf664baff4fd_nodejs-logo-svgrepo-com%25201.svg" alt="Node.js" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a5edbfe289d2294c18_6706294d8755a96f4cec0de6_laravel-wordmark-1%25201.svg" alt="Laravel" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Laravel</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/6799dcd99d3e7d527d33cb38_java%201%20(1).svg" alt="Django" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Java</span>
              </div>
            </div>
          </div>

          {/* CMS & E-Commerce Developers */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-black text-center font-medium mb-8">CMS & E-Commerce Developers</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a112a05875201c934e_676551817ac04b208afe7a12_Symbol.svg.svg" alt="Shopify" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Shopify</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/6799dcb516b641af20bf23d2_Frame%201272628620.svg" alt="WooCommerce" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">WooCommerce</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/6799db07e9704c5e19cdb55e_Group.svg" alt="WordPress" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">WordPress</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a9d4b1d776a61be1e5_670626878755a96f4ce92d08_webflow-svgrepo-com%25201.svg" alt="Webflow" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Webflow</span>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps Developers */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-black text-center font-medium mb-8">Cloud & DevOps Developers</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ac6661ce9bbe57e66f_6706229c3244b7eedceccc1d_google-cloud-svgrepo-com%25201.svg" alt="GCP" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">GCP</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a47d4f99f6ec702e66_6709102a45c7197dfd9f2e44_image.svg" alt="AWS" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a894360f4b4c9fb932_670626f9e448c33db52573bc_Microsoft_Azure%25201.svg" alt="Azure" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Azure</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949ace300fe3c5cdc3c8a_67062284e3f1d0864819556d_Layer_1.svg" alt="Kubernetes" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Kubernetes</span>
              </div>
            </div>
          </div>

          {/* AI Developers */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-black text-center font-medium mb-8">AI Developers</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a9a75dc198b9989ea5_670626f0e35b6cf9d19048b7_whisper-ai-logo-vector%25201.svg" alt="Whisper" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Whisper</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/676949a7bf1c60d85e6431b2_670627121cae83f1534aa87e_langchain-seeklogo%25201.svg" alt="LangChain" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">LangChain</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/6799dd56bb81275ca46db3f4_bubble_symbol.svg.svg" alt="Chatgpt" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">Chatgpt</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/677bc6f0345804dec4dd3a95_Frame%201272628614.svg" alt="Midjourney" className="h-8 mb-2" />
                <span className="text-xs text-gray-500">AI Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Unico Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Partner With Unico Connect For Seamless Development</h2>
          
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center mt-4 md:mt-0">
              Get in touch 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
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
    

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-blue-50">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
              Have a project in mind?
            </h2>
            <p className="text-lg font-semibold">Let's Connect</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full flex items-center mt-4 md:mt-0">
            Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

      {/* CSS for hexagon grid */}
      <style jsx>{`
        .grid-hexagon {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 10px;
        }
        
        .hexagon {
          width: 60px;
          height: 60px;
          background-color: white;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
        }
        
        .hexagon-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 300px;
        }
      `}</style>
    </div>
  );
}