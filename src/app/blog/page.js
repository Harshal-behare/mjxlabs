"use client";

import React from "react";
import BlogPost from "./BlogPost"; // Import the new BlogPost component

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
    <div className="bg-black text-white min-h-screen flex flex-col p-14">
      
      
      <div className="mt-2">
        <div className="flex flex-col items-center">
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

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold">Stay up to date with all things AI transformation.</h2>
        <input
          type="email"
          placeholder="Enter your email..."
          className="mt-4 p-2 rounded-md border border-gray-600 bg-gray-800 text-white"
        />
        <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
      </div>
    </div>
  );
};

export default Blog; 