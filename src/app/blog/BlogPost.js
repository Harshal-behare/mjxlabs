"use client";

import React from "react";

const BlogPost = ({ image, title, description, author }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl mt-4 flex">
      <div className="flex-1 pr-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="mt-2 text-gray-400">{description}</p>
        <p className="mt-4 text-gray-500">By {author}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
          Read more
        </button>
      </div>
      <img src={image} alt={title} className="w-128 h-64 object-cover rounded-md" />
    </div>
  );
};

export default BlogPost; 