"use client";

import React from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  const posts = [
    {
      image: "/blog/blog1.jpeg",
      title: "Turing Achieves 3x ARR Growth, Profitability, and AI Scaling in 2024",
      description: "Turing AGI Icons 3: Advancing AI with Jeff Dean and Gemini 2.0",
      author: "Abigail Dawson",
    },
    {
      image: "/blog/blog2.png",
      title: "OpenAI's Latest Model: A Fresh Perspective on Coding with AI",
      description: "Insights from AI leaders on the latest advancements.",
      author: "John Doe",
    },
    {
      image: "/blog/blog3.png",
      title: "Exploring the Future of AI: Trends and Predictions",
      description: "A deep dive into the future landscape of artificial intelligence.",
      author: "Jane Smith",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col px-4 py-8 sm:px-8 md:px-14">
      <div className="mt-2 w-full">
        <div className="flex flex-col items-center space-y-8">
          {posts.map((post, index) => (
            <BlogPost 
              key={index} 
              image={post.image} 
              title={post.title} 
              description={post.description} 
              author={post.author}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-10 text-center px-4">
        <h2 className="text-xl md:text-2xl font-bold leading-tight">
          Stay up to date with all things AI transformation.
        </h2>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full sm:w-64 p-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;