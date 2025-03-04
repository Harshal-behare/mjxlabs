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
    <main className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-hidden">
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

          <div className="grid md:grid-cols-2 gap-8 ">
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
                  src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/677385f4c2b414f7782d634d_670619de2e79525f33925d0a__Group_.svg"
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
                  src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/677385f41b642f9f4501f98b_67061a325f69a857cc89aaef__Group_(1).svg"
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
                  src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/677385f5b4ecaf963dedd869_670619eedef7a441d91ba89c__Group_(2).svg"
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
                    <Image src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/677389387b40fb39afd160e6_6707b8312bf6dc02716c5683_Group%25201000005801.svg"
                      alt="Delivered Results"
                      width={176}
                      height={176}
                      className="w-full h-full object-contain" />
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
                      <Image src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/67738938d140d44adb73719c_6707b8dbb0ecc3e1c8cafaef_Group%25201000005763.svg"
                        alt="Delivered Results"
                        width={176}
                        height={176}
                        className="w-full h-full object-contain"
                      />
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
                    <Image src="https://cdn.prod.website-files.com/6769356e3387b84fd1b7673a/677389395a809bd1091d16d5_6707b9e1995754725e337218_Frame%25202147223552.svg"
                      alt="Delivered Results"
                      width={176}
                      height={176}
                      className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack</h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
            {[
              { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
              { name: "Flutter", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
              { name: "Swift", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
              { name: "Kotlin", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
              { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
              { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
              { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
              { name: "iOS", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" }
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-16 w-16 mb-2 bg-gray-400 rounded-xl flex items-center justify-center">
                  <img src={tech.logo} alt={tech.name} className="h-10 w-10 object-contain" />
                </div>
                <span className="text-sm text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between bg-black">
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-1">Have a project in mind?</h2>
          <p className="text-lg font-medium">Let's Connect</p>
        </div>
        <Link href="/contact" className="mt-6 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center">
          Get in touch
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
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