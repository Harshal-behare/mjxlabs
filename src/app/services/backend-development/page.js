import React from 'react';
import Image from 'next/image';

const BackendDevelopmentPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Backend Development</h1>
        <p className="text-gray-400 max-w-3xl">Develop fast, secure, and highly scalable backend systems that power cutting-edge applications.</p>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Scalable Backend Solutions With <br />Node, MongoDB, And LowCode <br />Platforms</h2>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Card 1 */}
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                <span className="text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold">Requirement Gathering</h3>
            </div>
            <p className="text-gray-400">Working closely with stakeholders to define functionality and key requirements.</p>
          </div>
          
          {/* Service Card 2 */}
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                <span className="text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold">Architecture Design</h3>
            </div>
            <p className="text-gray-400">Planning a scalable API structure and database architecture for your application.</p>
          </div>
          
          {/* Service Card 3 */}
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                <span className="text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold">Agile Implementation</h3>
            </div>
            <p className="text-gray-400">Rapid iteration and continuous delivery to maximize the business results.</p>
          </div>
          
          {/* Service Card 4 */}
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                <span className="text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold">Database Management</h3>
            </div>
            <p className="text-gray-400">Building and optimizing databases with MongoDB, PostgreSQL.</p>
          </div>
          
          {/* Service Card 5 */}
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                <span className="text-white">5</span>
              </div>
              <h3 className="text-xl font-semibold">API Development</h3>
            </div>
            <p className="text-gray-400">Creating RESTful APIs for seamless frontend and integration.</p>
          </div>
          
          {/* Service Card 6 */}
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                <span className="text-white">6</span>
              </div>
              <h3 className="text-xl font-semibold">Security & Testing</h3>
            </div>
            <p className="text-gray-400">Ensuring high security and creating solutions built to industry standards.</p>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="bg-white text-black py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-center text-gray-400 mb-4">Our Solutions</h2>
          <h3 className="text-3xl font-bold text-center mb-12">Next-Gen Backend Solutions For Your Applications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="text-center">
              <div className="mb-6 mx-auto w-32 h-32 relative">
                <Image 
                  src="/images/team-experts.svg" 
                  alt="Team of Experts" 
                  width={128} 
                  height={128} 
                  layout="responsive"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Team of Experts</h4>
              <p className="text-gray-600">Our backend developers bring decades of combined experience to your project.</p>
            </div>
            
            {/* Solution 2 */}
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <div className="mb-6 mx-auto w-32 h-32 relative">
                <Image 
                  src="/images/deep-understanding.svg" 
                  alt="Deep Understanding" 
                  width={128} 
                  height={128} 
                  layout="responsive"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Deep Understanding</h4>
              <p>Our team has experience with both simple and complex backend requirements.</p>
            </div>
            
            {/* Solution 3 */}
            <div className="text-center">
              <div className="mb-6 mx-auto w-32 h-32 relative">
                <Image 
                  src="/images/optimized-results.svg" 
                  alt="Optimized Results" 
                  width={128} 
                  height={128} 
                  layout="responsive"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Optimized Results</h4>
              <p className="text-gray-600">We focus on delivering efficient, scalable, and maintainable backend solutions.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="bg-black text-white py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-3">Process Ensures Planning, Development, <br />Testing, And Maintenance For Reliable <br />Digital Infrastructure</h2>
          </div>
          
          {/* BE Process */}
          <div className="bg-gray-900 rounded-lg p-8 mb-10">
            <h3 className="text-xl font-bold mb-5">BE Process</h3>
            <p className="text-gray-400 mb-8">Business-grade back-end systems easily and reliably for deployment, so they function quickly and completely for the business.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">Quality code that scales with business growth</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">Solutions ready for reliable scalability</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">Using best-fit tools and technologies</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">Testing for edge-cases throughout life-cycle</p>
              </div>
            </div>
            
            <div className="mt-8 md:w-1/2 ml-auto">
              <div className="w-full h-48 bg-gray-800 rounded-lg"></div>
            </div>
          </div>
          
          {/* Architecture Design */}
          <div className="bg-gray-900 rounded-lg p-8 mb-10">
            <h3 className="text-xl font-bold mb-5">Architecture Design</h3>
            <p className="text-gray-400 mb-8">Effective, scalable and focused code designed for scalability, maintainability, and high performance.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">Modular designs are chosen to adapt to your business growth</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">Clean, intuitive file and component structure to improve growth</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">Prioritizing efficiency and performance, if applicable, for business success</p>
              </div>
            </div>
            
            <div className="mt-8 md:w-1/2 ml-auto">
              <div className="w-full h-48 bg-gray-800 rounded-lg"></div>
            </div>
          </div>
          
          {/* Cloud-Based Solutions */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-5">Cloud-Based Backend Solutions</h3>
            <p className="text-gray-400 mb-8">Secure and scalable cloud-based backend solutions based on our AWS, Google Cloud, or Azure expertise.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">Leverage global infrastructure for flexibility</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">Cost-effective setup with scalable cloud solutions</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">Highly-available architecture to ensure uptime and UX</p>
              </div>
            </div>
            
            <div className="mt-8 md:w-1/2 ml-auto">
              <div className="w-full h-48 bg-gray-800 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack */}
      <section className="bg-white text-black py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Tech Stack</h2>
          
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 mb-12">
            {/* Tech logos */}
            <div className="flex-col justify-center items-center p-4">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width={80} height={32} />
            
            </div>
            <div className="flex justify-center items-center p-4">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width={80} height={32} />
            </div>
            <div className="flex justify-center items-center p-4">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" width={80} height={32} />
            </div>
            <div className="flex justify-center items-center p-4">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" width={80} height={32} />
            </div>
            <div className="flex justify-center items-center p-4">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" width={80} height={32} />
            </div>
            <div className="flex justify-center items-center p-4">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel" width={80} height={32} />
            </div>
            <div className="flex justify-center items-center p-4">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" width={80} height={32} />
            </div>
          </div>
          
         
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-white text-black py-10">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-blue-500">Have a project in mind?</h2>
              <p className="text-xl">Let's Connect!</p>
            </div>
            <button className="mt-4 md:mt-0 bg-blue-500 text-white px-6 py-3 rounded-full flex items-center">
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BackendDevelopmentPage;