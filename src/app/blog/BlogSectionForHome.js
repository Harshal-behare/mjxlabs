"use client";

import Image from "next/image";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const BlogsSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchLatestPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/blogs');
        // Get only the latest 3 posts (they're already sorted by timestamp in the API)
        setPosts(response.data.data.slice(0, 3));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to fetch blog posts');
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  // Function to estimate read time (roughly 200 words per minute)
  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min${readTime > 1 ? 's' : ''}`;
  };

  // Don't render anything until after mounting to prevent hydration issues
  if (!mounted) {
    return null;
  }

  if (loading) {
    return (
      <div className="bg-black text-white py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Latest Blogs & Articles</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black text-white py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Latest Blogs & Articles</h2>
          <div className="text-center text-red-400">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Latest Blogs & Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post._id} className="bg-gray-900/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-500/10 group">
              <div className="relative h-64 w-full">
                {post.imageURL ? (
                  <div className="relative h-full w-full">
                    <Image 
                      src={post.imageURL} 
                      alt={post.title}
                      width={400}
                      height={256}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      unoptimized={post.imageURL.startsWith('http')}
                    />
                  </div>
                ) : (
                  <div className="h-full w-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <svg className="h-16 w-16 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    Blog
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    <span>
                      {new Date(post.timestamp).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 leading-tight line-clamp-2">
                  <Link href={`/blog/${post._id}`} className="hover:text-blue-400 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400">
                    <FaClock className="mr-1" />
                    <span className="text-sm">{calculateReadTime(post.content)} read</span>
                  </div>
                  <Link 
                    href={`/blog/${post._id}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    Read More →
                  </Link>
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
            View All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;