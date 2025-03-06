"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock, FaSearch } from 'react-icons/fa';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if user is admin
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get('/api/auth/check-admin');
        setIsAdmin(response.data.isAdmin);
      } catch (err) {
        console.error('Error checking admin status:', err);
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/blogs');
        setPosts(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to fetch blog posts: ' + (err.response?.data?.error || err.message));
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min${readTime > 1 ? 's' : ''}`;
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-64">
          <div className="relative w-20 h-20">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-64">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 max-w-lg w-full">
            <p className="text-red-400 text-center">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Discover insights, tutorials, and updates from our team
          </p>
          <div className="flex justify-center gap-4">
            <div className="relative max-w-xl w-full">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {isAdmin && (
              <Link 
                href="/blog/new" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all duration-300 flex items-center gap-2 hover:gap-3"
              >
                Create Post
                <FaArrowRight className="text-sm" />
              </Link>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 max-w-lg mx-auto border border-gray-800/50">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-200">No posts found</h3>
              <p className="mt-2 text-gray-400">
                {searchTerm ? 'Try different search terms' : 'No blog posts available at the moment.'}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post._id} className="group">
                <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-blue-500/5">
                  <div className="relative h-64 w-full overflow-hidden">
                    {post.imageURL ? (
                      <Image 
                        src={post.imageURL} 
                        alt={post.title}
                        width={400}
                        height={256}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized={post.imageURL.startsWith('http')}
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <svg className="h-16 w-16 text-white/75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm backdrop-blur-md">
                        {post.status === 'draft' ? 'Pending' : 'Published'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
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
                      <div className="flex items-center text-gray-400 text-sm">
                        <FaClock className="mr-2" />
                        <span>{calculateReadTime(post.content)} read</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                      <Link href={`/blog/${post._id}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {post.content}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <FaUser className="text-white/90 text-sm" />
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-300">{post.author}</span>
                      </div>
                      <Link 
                        href={`/blog/${post._id}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center gap-1 hover:gap-2"
                      >
                        Read More
                        <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}