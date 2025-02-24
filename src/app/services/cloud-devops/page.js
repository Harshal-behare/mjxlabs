"use client";

import React from "react";

const CloudDevOps = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen flex flex-col p-10">
      <h1 className="text-4xl font-bold text-center mt-20 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Cloud Solutions & DevOps
      </h1>
      <p className="text-center mt-8 text-gray-300">
        Revolutionizing cloud infrastructure and operations with cutting-edge solutions.
      </p>

      <div className="mt-16 p-8 bg-gray-800/50 rounded-xl shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white">Overview</h2>
        <p className="mt-4 text-gray-400">
          We specialize in transforming traditional IT infrastructure into modern, scalable cloud ecosystems. Our services include:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <li className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all">
            <h3 className="text-xl font-bold text-white">CI/CD Pipelines</h3>
            <p className="mt-2 text-gray-400">
              Automated build, test, and deployment workflows with 99.9% reliability
            </p>
          </li>
          <li className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all">
            <h3 className="text-xl font-bold text-white">Infrastructure as Code</h3>
            <p className="mt-2 text-gray-400">
              Manage cloud resources using Terraform and CloudFormation
            </p>
          </li>
          <li className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all">
            <h3 className="text-xl font-bold text-white">Monitoring & Logging</h3>
            <p className="mt-2 text-gray-400">
              Real-time insights with Prometheus, Grafana, and ELK stack
            </p>
          </li>
          <li className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all">
            <h3 className="text-xl font-bold text-white">Security & Compliance</h3>
            <p className="mt-2 text-gray-400">
              End-to-end security with SOC 2 and ISO 27001 compliance
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-16 p-8 bg-gray-800/50 rounded-xl shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all">
            <h3 className="text-2xl font-bold text-white">Cloud Migration</h3>
            <p className="mt-4 text-gray-400">
              Seamless migration to AWS, Azure, or GCP with zero downtime
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-400">• 100+ successful migrations</p>
              <p className="text-sm text-gray-400">• 24/7 migration support</p>
              <p className="text-sm text-gray-400">• Cost optimization analysis</p>
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all">
            <h3 className="text-2xl font-bold text-white">DevOps Automation</h3>
            <p className="mt-4 text-gray-400">
              End-to-end automation with Jenkins, GitLab CI, and ArgoCD
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-400">• 50% faster deployments</p>
              <p className="text-sm text-gray-400">• Automated rollback systems</p>
              <p className="text-sm text-gray-400">• Custom pipeline development</p>
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all">
            <h3 className="text-2xl font-bold text-white">Cloud Consulting</h3>
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

      <div className="mt-16 p-8 bg-gray-800/50 rounded-xl shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all">
            <h3 className="text-2xl font-bold text-white">40%</h3>
            <p className="mt-2 text-gray-400">Reduction in operational costs</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all">
            <h3 className="text-2xl font-bold text-white">99.9%</h3>
            <p className="mt-2 text-gray-400">System uptime achieved</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all">
            <h3 className="text-2xl font-bold text-white">200+</h3>
            <p className="mt-2 text-gray-400">Successful cloud migrations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOps;
