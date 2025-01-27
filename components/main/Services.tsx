"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software for business needs.",
    keyAreas: "Web apps, ERP, CRM, SaaS.",
    technologies: "React, Node.js, Python, etc.",
  },
  {
    title: "Mobile App Development",
    description: "Native or cross-platform apps.",
    keyAreas: "iOS, Android, E-commerce apps.",
    technologies: "Swift, Kotlin, Flutter, etc.",
  },
  {
    title: "AI & Machine Learning Solutions",
    description: "Predictive analytics, chatbots, NLP, etc.",
    technologies: "TensorFlow, Scikit-learn, etc.",
  },
  {
    title: "Cloud Solutions & DevOps",
    description: "Cloud migrations, CI/CD pipelines, etc.",
    technologies: "AWS, Docker, Kubernetes.",
  },
  {
    title: "E-commerce Solutions",
    description: "Scalable e-commerce platforms.",
    keyAreas: "Shopify, Magento, payment gateways.",
    technologies: "WooCommerce, React, Node.js.",
  },
];

const Services = () => {
  return (
    <div className="py-20 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white">Our Services</h2>
      <p className="text-center mt-4 text-gray-400">We offer a variety of services to help your business grow.</p>
      <div className="flex flex-wrap justify-center mt-8">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-700 p-6 m-4 rounded-lg shadow-lg bg-gray-800 w-80 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-gray-300">{service.description}</p>
            {service.keyAreas && <p className="mt-2 text-gray-300"><strong>Key Areas:</strong> {service.keyAreas}</p>}
            <p className="mt-2 text-gray-300"><strong>Technologies:</strong> {service.technologies}</p>
            <Link href={`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`} className="mt-4 inline-block text-blue-400 hover:underline">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; 