"use client";

import React from "react";

const CloudDevOps = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen flex flex-col p-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-20 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
        Cloud Solutions & DevOps
      </h1>
      <p className="text-center mt-8 text-gray-300 text-lg animate-slide-up">
        Revolutionizing cloud infrastructure and operations with cutting-edge solutions.
      </p>

      <div className="mt-16 p-8 bg-gray-800/50 rounded-xl shadow-2xl backdrop-blur-sm hover:shadow-blue-500/20 transition-all duration-300">
        <h2 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors">
          Overview
        </h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          We specialize in transforming traditional IT infrastructure into modern, scalable cloud ecosystems. Our services include:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <li className="p-6 bg-gray-900/50 rounded-lg transform hover:scale-105 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/20">
            <h3 className="text-xl font-bold text-white">CI/CD Pipelines</h3>
            <p className="mt-2 text-gray-400">
              Automated build, test, and deployment workflows with 99.9% reliability
            </p>
          </li>
          <li className="p-6 bg-gray-900/50 rounded-lg transform hover:scale-105 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/20">
            <h3 className="text-xl font-bold text-white">Infrastructure as Code</h3>
            <p className="mt-2 text-gray-400">
              Manage cloud resources using Terraform and CloudFormation
            </p>
          </li>
          <li className="p-6 bg-gray-900/50 rounded-lg transform hover:scale-105 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/20">
            <h3 className="text-xl font-bold text-white">Monitoring & Logging</h3>
            <p className="mt-2 text-gray-400">
              Real-time insights with Prometheus, Grafana, and ELK stack
            </p>
          </li>
          <li className="p-6 bg-gray-900/50 rounded-lg transform hover:scale-105 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/20">
            <h3 className="text-xl font-bold text-white">Security & Compliance</h3>
            <p className="mt-2 text-gray-400">
              End-to-end security with SOC 2 and ISO 27001 compliance
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-16 p-8 bg-gray-800/50 rounded-xl shadow-2xl backdrop-blur-sm hover:shadow-purple-500/20 transition-all duration-300">
        <h2 className="text-3xl font-bold text-white hover:text-purple-400 transition-colors">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-gray-900/50 rounded-lg transform hover:scale-105 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400">
              Cloud Migration
            </h3>
            <p className="mt-4 text-gray-400">
              Seamless migration to AWS, Azure, or GCP with zero downtime
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-400">• 100+ successful migrations</p>
              <p className="text-sm text-gray-400">• 24/7 migration support</p>
              <p className="text-sm text-gray-400">• Cost optimization analysis</p>
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg transform hover:scale-105 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400">
              DevOps Automation
            </h3>
            <p className="mt-4 text-gray-400">
              End-to-end automation with Jenkins, GitLab CI, and ArgoCD
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-400">• 50% faster deployments</p>
              <p className="text-sm text-gray-400">• Automated rollback systems</p>
              <p className="text-sm text-gray-400">• Custom pipeline development</p>
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg transform hover:scale-105 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400">
              Cloud Consulting
            </h3>
            <p className="mt-4 text-gray-400">
              Strategic planning and architecture design for cloud ecosystems
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-400">• Cost reduction strategies</p>
              <p className="text-sm text-gray-400">• Scalability planning</p>
              <p className="text-sm text-gray-400">• Disaster recovery solutions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 p-8 bg-gray-800/50 rounded-xl shadow-2xl backdrop-blur-sm hover:shadow-green-500/20 transition-all duration-300">
        <h2 className="text-3xl font-bold text-white hover:text-green-400 transition-colors">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-gray-900/50 rounded-lg transform hover:scale-105 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-green-500/20 group">
            <h3 className="text-2xl font-bold text-white group-hover:text-green-400">
              40%
            </h3>
            <p className="mt-2 text-gray-400">Reduction in operational costs</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg transform hover:scale-105 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-green-500/20 group">
            <h3 className="text-2xl font-bold text-white group-hover:text-green-400">
              99.9%
            </h3>
            <p className="mt-2 text-gray-400">System uptime achieved</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg transform hover:scale-105 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-green-500/20 group">
            <h3 className="text-2xl font-bold text-white group-hover:text-green-400">
              200+
            </h3>
            <p className="mt-2 text-gray-400">Successful cloud migrations</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CloudDevOps;
