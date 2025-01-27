"use client";

import React from "react";
import CaseStudyCard from "@/components/main/CaseStudyCard";

const caseStudies = [
  {
    title: "E-commerce Platform Revamp",
    problem: "The client faced declining sales due to a poor user experience on their website.",
    solution: "We redesigned the website using React and implemented a new checkout process, improving usability.",
    results: "Increased revenue by 30% within three months.",
    testimonial: "The new site has transformed our business!",
  },
  {
    title: "AI-Powered Chatbot Implementation",
    problem: "The client struggled with high customer service costs and slow response times.",
    solution: "We developed an AI chatbot using TensorFlow to handle common inquiries.",
    results: "Reduced customer service costs by 40% and improved response times by 70%.",
    testimonial: "Our customers love the instant support!",
  },
  {
    title: "Mobile App Development for Retail",
    problem: "The client needed a mobile solution to reach a younger audience.",
    solution: "We created a cross-platform mobile app using Flutter.",
    results: "User engagement increased by 50% within the first month.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold text-center text-white">Case Studies</h1>
      <p className="text-center mt-4 text-gray-400">Explore our successful projects and the impact we&apos;ve made.</p>
      <div className="max-w-4xl mx-auto mt-8">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard
            key={index}
            title={caseStudy.title}
            problem={caseStudy.problem}
            solution={caseStudy.solution}
            results={caseStudy.results}
            testimonial={caseStudy.testimonial}
          />
        ))}
      </div>
    </div>
  );
} 