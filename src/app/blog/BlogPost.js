"use client";

import React from "react";
import Image from "next/image";

const BlogPost = ({ image, title, description, author }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl mt-4 flex flex-col md:flex-row">
      <div className="flex-1 md:pr-4 order-2 md:order-1">
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
        <p className="mt-2 text-gray-400 text-sm md:text-base">{description}</p>
        <p className="mt-4 text-gray-500 text-sm">By {author}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out text-sm md:text-base">
          Read more
        </button>
      </div>
      <div className="w-1/2 md:w-128 h-48 md:h-64 relative mb-4 md:mb-0 order-1 md:order-2">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default BlogPost;