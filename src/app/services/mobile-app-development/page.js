'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function MobileAppDevelopmentPage() {
  // Optional: Add scroll reveal animation
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Mobile App Development</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300">
            Embrace The Future Of App Development With Our Scalable Solutions That Bring Code To Life Across Platforms
          </p>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-14 text-white">Our Agile Mobile Application Development Process</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="col-span-1 space-y-12">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                    01
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Strategic Planning</h3>
                    <p className="text-gray-400">Deep market research, competitor benchmarking, identity personas, and set measurable KPIs for project success.</p>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 ease-out">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                    02
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Design Phase</h3>
                    <p className="text-gray-400">Our skilled UX/UI designers, design interfaces, and deliver intuitive prototypes for development.</p>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 ease-out">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                    03
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Development Stage</h3>
                    <p className="text-gray-400">We build using proven coding technologies, and carry out CI/CD with full integration.</p>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 ease-out">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                    04
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quality Assurance</h3>
                    <p className="text-gray-400">We conduct rigorous testing for functionality, security, usability, and performance.</p>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 ease-out">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                    05
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Release and Support</h3>
                    <p className="text-gray-400">We manage app store submission and provide ongoing maintenance based on user feedback.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              {/* Placeholder for process illustration */}
              <div className="h-full w-full bg-gradient-to-tr from-blue-900/20 to-purple-900/20 rounded-lg border border-gray-800"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-500">Features</h2>
          <h3 className="text-3xl font-bold mb-16 text-center">Crafting Lightning-Fast Apps with Seamless Precision</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <div className="w-44 h-44 mb-6">
                <Image 
                  src="/images/team-of-experts.svg" 
                  alt="Team of Experts"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold mb-3">Team of Experts</h4>
              <p className="text-gray-600">Our mobile app developers bring years of cross-platform expertise and a dedication to crafting perfect user experiences for your business needs.</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 ease-out">
              <div className="w-44 h-44 mb-6 bg-blue-500 rounded-lg overflow-hidden">
                <Image 
                  src="/images/deep-understanding.svg" 
                  alt="Deep Understanding"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-3">Deep Understanding</h4>
              <p className="text-gray-600">Blending of product design and intelligent engineering solutions guarantees apps that not only look amazing but also perform flawlessly.</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 ease-out">
              <div className="w-44 h-44 mb-6">
                <Image 
                  src="/images/delivered-results.svg" 
                  alt="Delivered Results"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold mb-3">Delivered Results</h4>
              <p className="text-gray-600">Our approach to mobile app development prioritizes your business goals and delivers solutions that drive growth and user engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Solutions Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center text-white">Structured Process Ensures Efficient</h2>
          <p className="text-xl mb-16 text-center text-white">Delivery And Bug-Free Codebase</p>
          
          <div className="space-y-12">
            {/* Cutting-Edge App Development */}
            <div className="bg-gray-900 rounded-lg p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge App Development</h3>
                  <p className="text-gray-400 mb-6">Pioneering advancements in mobile technology</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <span>High-performance native applications</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <span>Innovative user experiences</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <span>Scalable and extensible design</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <span>Leading-edge UI/UX design</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-700 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Innovative Cross-Platform App Development */}
            <div className="bg-gray-900 rounded-lg p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Innovative Cross-Platform App Development</h3>
                  <p className="text-gray-400 mb-6">Unified solutions enabling the perfect terminal interface</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <span>Flutter solutions for pixel-perfect applications</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <span>React Native expertise for multi-platform deployment</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <span>Quality-verified app updates and maintenance</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-gray-800 rounded-lg flex items-center justify-center relative">
                    <div className="w-32 h-32 bg-gray-700 rounded-md"></div>
                    <div className="absolute top-4 right-4 h-8 w-8 bg-blue-500 rounded-md flex items-center justify-center">
                      <div className="h-4 w-4 bg-white rounded-sm"></div>
                    </div>
                    <div className="absolute bottom-4 right-4 h-8 w-8 bg-red-500 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Empowering Solutions with No Code/Low Code */}
            <div className="bg-gray-900 rounded-lg p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Empowering Solutions with No Code/Low Code</h3>
                  <p className="text-gray-400 mb-6">Streamline development with FlutterFlow for fast, flexible app creation</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <span>Drag-and-drop UI interface with FlutterFlow</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <span>Easily create from blueprints and frameworks to start your app</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                      <span>Simple, accessible, logical, and intuitive development processes</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-gray-800 rounded-lg flex items-center justify-center relative">
                    <div className="w-32 h-32 bg-gray-700 rounded-md"></div>
                    <div className="absolute top-3 right-3 h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">LC</div>
                    <div className="absolute bottom-3 right-3 h-10 w-10 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">NC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack</h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
            {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS', 'Google Cloud', 'iOS'].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-16 w-16 mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="h-10 w-10 bg-gray-200 rounded"></div>
                </div>
                <span className="text-sm text-gray-600">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl text-blue-500 font-bold">Have a project in mind?</h2>
            <p className="text-xl font-semibold">Let's Connect</p>
          </div>
          <Link href="/contact" className="mt-4 md:mt-0 px-6 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors flex items-center">
            Get In Touch
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Custom styles */}
      <style jsx>{`
        .animate-on-scroll {
          transition-property: opacity, transform;
          transition-duration: 0.7s;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </main>
  );
}