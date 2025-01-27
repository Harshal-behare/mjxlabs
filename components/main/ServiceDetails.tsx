"use client";

import React from "react";
import { useRouter } from "next/router";

// Define the type for the service data
type ServiceInfo = {
  title: string;
  description: string;
  keyAreas?: string;
  technologies: string;
};

// Define the service data with a specific type
const serviceData: Record<string, ServiceInfo> = {
  "custom-software-development": {
    title: "Custom Software Development",
    description: "Tailored software for business needs.",
    keyAreas: "Web apps, ERP, CRM, SaaS.",
    technologies: "React, Node.js, Python, etc.",
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Native or cross-platform apps.",
    keyAreas: "iOS, Android, E-commerce apps.",
    technologies: "Swift, Kotlin, Flutter, etc.",
  },
  "ai-machine-learning-solutions": {
    title: "AI & Machine Learning Solutions",
    description: "Predictive analytics, chatbots, NLP, etc.",
    technologies: "TensorFlow, Scikit-learn, etc.",
  },
  "cloud-solutions-devops": {
    title: "Cloud Solutions & DevOps",
    description: "Cloud migrations, CI/CD pipelines, etc.",
    technologies: "AWS, Docker, Kubernetes.",
  },
  "e-commerce-solutions": {
    title: "E-commerce Solutions",
    description: "Scalable e-commerce platforms.",
    keyAreas: "Shopify, Magento, payment gateways.",
    technologies: "WooCommerce, React, Node.js.",
  },
};

const ServiceDetails = () => {
  const router = useRouter();
  const { service } = router.query;

  // Ensure service is a string before using it as an index
  const serviceInfo = typeof service === "string" ? serviceData[service] : undefined;

  if (!serviceInfo) {
    return <div>Service not found</div>;
  }

  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center">{serviceInfo.title}</h2>
      <p className="text-center mt-4">{serviceInfo.description}</p>
      {serviceInfo.keyAreas && <p className="mt-2"><strong>Key Areas:</strong> {serviceInfo.keyAreas}</p>}
      <p className="mt-2"><strong>Technologies:</strong> {serviceInfo.technologies}</p>
    </div>
  );
};

export default ServiceDetails; 