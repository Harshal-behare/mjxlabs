"use client";

import Image from "next/image";
import Link from 'next/link';
import React from 'react';

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Highlands Brain App Design",
      category: "UI/UX Design",
      date: "Feb 19, 2025",
      readTime: "7 mins",
      image: "/blog/blog1.jpeg",
      link: "/blog/highlands-brain-app-design"
    },
    {
      id: 2,
      title: "Unico Connect Recognized by GoodFirms as the Best Company to Work With",
      category: "Marketing",
      date: "June 9, 2024",
      readTime: "10 mins",
      image: "/blog/blog2.png",
      link: "/blog/unico-connect-goodfirms"
    },
    {
      id: 3,
      title: "Unico Connect Named to Clutch 100 List of Fastest-Growing Companies for 2024",
      category: "Marketing",
      date: "June 9, 2024",
      readTime: "11 mins",
      image: "/blog/blog3.png",
      link: "/blog/unico-connect-clutch-100"
    }
  ];

  return (
    <div className="bg-black text-white py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Latest Blogs & Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-900/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-500/10 group">
              <div className="relative h-64 w-full">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                  <span className="text-gray-400 text-sm">{blog.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  <Link href={blog.link} className="hover:text-blue-400 transition-colors">
                    {blog.title}
                  </Link>
                </h3>
                
                <div className="flex items-center text-gray-400">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <span className="text-sm">{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            href="/blog" 
            className="bg-black border border-gray-700 hover:border-blue-500 text-white hover:text-blue-400 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-blue-500/20"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;