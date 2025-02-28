"use client";

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FrontendDevelopmentPage = () => {
  return (
    <div className="frontend-page">
    
      {/* Hero Section */}
      <section className="hero-section frontend-page">
        <div className="container">
          <h1 className="hero-title">Frontend Development</h1>
          <p className="hero-subtitle">
          Build Modern, Responsive, And User-Friendly Web Interfaces With Our Expertise In Frontend Technologies
          </p>
        </div>
        <style jsx>{`
          .frontend-page.hero-section {
            position: relative;
            padding: 8rem 0;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            overflow: hidden;
          }

          .frontend-page.hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 50% 50%, rgba(10, 132, 255, 0.1) 0%, transparent 70%);
            z-index: 1;
          }

          .frontend-page .hero-title {
            position: relative;
            z-index: 2;
            font-size: 4rem;
            background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .frontend-page .hero-subtitle {
            position: relative;
            z-index: 2;
            font-size: 1.5rem;
            color: rgba(255, 255, 255, 0.9);
            max-width: 800px;
            line-height: 1.8;
            margin: 1.5rem auto 0;
          }

          @media (max-width: 768px) {
            .frontend-page.hero-section {
              padding: 6rem 0;
            }
            
            .frontend-page .hero-title {
              font-size: 2.5rem;
            }
            
            .frontend-page .hero-subtitle {
              font-size: 1.2rem;
            }
          }
        `}</style>
      </section>

      {/* Methodology Section */}
      <section className="methodology-section">
        <div className="container flex">
          <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
            <h2 className="section-title text-left mb-8">
              Our Methodology For Creating Intuitive And Responsive Front-End Interfaces
            </h2>
          </div>
          
          <div className="w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="methodology-card"
            >
              <div className="methodology-icon">
                <span>01</span>
              </div>
              <h3>Requirement Analysis</h3>
              <p>Understanding the client's design goals, user needs, and business objectives.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="methodology-card"
            >
              <div className="methodology-icon">
               <span>02</span>
              </div>
              <h3>Wireframing & Prototyping</h3>
              <p>Creating interactive wireframes to confirm and refine the user experience.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="methodology-card"
            >
              <div className="methodology-icon">
                <span>03</span>
              </div>
              <h3>Agile Development</h3>
              <p>Building dynamic, pixel-perfect interfaces using modern frameworks like React, Angular, or Vue.js.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="methodology-card"
            >
              <div className="methodology-icon">
                <span>04</span>
              </div>
              <h3>Responsive Design</h3>
              <p>Ensuring excellent performance across all devices and screen sizes.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="methodology-card"
            >
              <div className="methodology-icon">
                <span>05</span>
              </div>
              <h3>Performance Optimization</h3>
              <p>Implementing best practices to deliver fast loading, highly optimized user interfaces.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="our-process-section">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Process</h2>
          <h3 className="process-subtitle text-center mb-16 max-w-2xl mx-auto">
            Innovative Frontend Solutions That Scale With Your Business, Enhance UX, And Boost Engagement
          </h3>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="process-card bg-white/10 p-8 rounded-lg shadow-lg"
            >
              <div className="process-content">
                <h3 className="text-xl font-bold mb-4">Strategic Discovery</h3>
                <p className="mb-6">We begin by understanding your business needs and goals, conducting detailed research to craft a tailored and effective solution for your audience.</p>
                <ul className="process-list space-y-2">
                  <li>• Comprehensive analysis of your business goals and target audience</li>
                  <li>• Insights to create a tailored approach to specific needs</li>
                  <li>• A clear plan, full of exciting technologies, and designs from the start</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="process-card bg-white/10 p-8 rounded-lg shadow-lg"
            >
              <div className="process-content">
                <h3 className="text-xl font-bold mb-4">Innovative Design & Development</h3>
                <p className="mb-6">Our expert team transforms designs into beautiful, scalable designs, using the latest technologies to build responsive user interfaces for optimal UX.</p>
                <ul className="process-list space-y-2">
                  <li>• User-centered frontend solutions with intuitive navigation</li>
                  <li>• Clean, accessible code for future maintenance and scalability</li>
                  <li>• Continuous client review to keep the design on the right track</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="process-card bg-white/10 p-8 rounded-lg shadow-lg"
            >
              <div className="process-content">
                <h3 className="text-xl font-bold mb-4">Seamless Integration & Optimization</h3>
                <p className="mb-6">We ensure perfect integration with your existing systems to create efficient solutions that continuously evolve with your business to maximize impact.</p>
                <ul className="process-list space-y-2">
                  <li>• Seamless flow of information with your existing backend</li>
                  <li>• Extensive testing through real-world practice</li>
                  <li>• Performance monitoring with regular updates with deployment practices</li>
                </ul>
              </div>
              <div className="process-image">
                <Image src="/images/seamless-integration.png" alt="Seamless Integration" width={300} height={200} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">Tech Stack</h2>
          
          <div className="tech-grid" style={{ display: 'flex', overflowX: 'auto', gap: '2rem', padding: '1rem 0' }}>
            <div className="tech-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
              <Image src="/images/tech/angular.svg" alt="Angular" width={80} height={40} />
              <span>Angular</span>
            </div>
            <div className="tech-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
              <Image src="/images/tech/vue.svg" alt="Vue.js" width={80} height={40} />
              <span>Vue.js</span>
            </div>
            <div className="tech-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
              <Image src="/images/tech/react.svg" alt="React" width={80} height={40} />
              <span>React</span>
            </div>
            <div className="tech-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
              <Image src="/images/tech/html5.svg" alt="HTML5" width={80} height={40} />
              <span>HTML5</span>
            </div>
            <div className="tech-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
              <Image src="/images/tech/css3.svg" alt="CSS3" width={80} height={40} />
              <span>CSS3</span>
            </div>
            <div className="tech-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
              <Image src="/images/tech/nextjs.svg" alt="Next.js" width={80} height={40} />
              <span>Next.js</span>
            </div>
            <div className="tech-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
              <Image src="/images/tech/tailwind.svg" alt="Tailwind CSS" width={80} height={40} />
              <span>Tailwind</span>
            </div>
            <div className="tech-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
              <Image src="/images/tech/typescript.svg" alt="TypeScript" width={80} height={40} />
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Have a project in mind?</h2>
            <p className="cta-subtitle">Let's Connect</p>
            <div className="cta-button-container">
              <Link href="/contact" className="btn btn-primary btn-large">
                Get In Touch
                <span className="arrow-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          .cta-section {
            padding: 6rem 0;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            text-align: center;
          }
          .cta-content {
            max-width: 800px;
            margin: 0 auto;
          }
          .cta-title {
            font-size: 2.5rem;
            color: #ffffff;
            margin-bottom: 1rem;
          }
          .cta-subtitle {
            font-size: 1.25rem;
            color: #94a3b8;
            margin-bottom: 2rem;
          }
          .cta-button-container {
            display: inline-block;
          }
          .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            border-radius: 0.5rem;
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            transition: transform 0.2s ease;
          }
          .btn-primary:hover {
            transform: translateY(-2px);
          }
          .arrow-icon {
            transition: transform 0.2s ease;
          }
          .btn-primary:hover .arrow-icon {
            transform: translateX(3px);
          }
        `}</style>
      </section>

    </div>
  );
};

export default FrontendDevelopmentPage;