"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaEdit, FaTrash, FaArrowLeft, FaClock } from 'react-icons/fa';

export default function BlogPostDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/blogs/${id}`);
        setPost(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to fetch blog post');
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min${readTime > 1 ? 's' : ''}`;
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        setDeleting(true);
        await axios.delete(`/api/blogs/${id}`);
        router.push('/blog');
      } catch (err) {
        console.error('Error deleting blog post:', err);
        alert('Failed to delete blog post');
        setDeleting(false);
      }
    }
  };

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

  if (!post) return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Post not found</h2>
        <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/blog" 
          className="inline-flex items-center px-6 py-3 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-blue-500 transition-all duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Return to Blog
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Navigation and Actions */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/blog" 
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                href={`/blog/edit/${id}`} 
                className="flex items-center px-4 py-2 bg-gray-900 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaEdit className="mr-2" />
                Edit
              </Link>
              <button 
                onClick={handleDelete} 
                disabled={deleting}
                className="flex items-center px-4 py-2 bg-red-500/10 rounded-full text-red-400 hover:text-red-300 transition-colors duration-300"
              >
                <FaTrash className="mr-2" />
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>

          {/* Article */}
          <article className="bg-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800/50">
            {/* Featured Image */}
            {post.imageURL && (
              <div className="relative h-[400px] w-full">
                <Image 
                  src={post.imageURL} 
                  alt={post.title}
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                  unoptimized={post.imageURL.startsWith('http')}
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Title and Meta */}
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 mb-12 text-gray-400">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <FaUser className="text-white/90" />
                    </div>
                    <span className="ml-3">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>
                      {new Date(post.timestamp).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{calculateReadTime(post.content)} read</span>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg prose-invert max-w-none">
                  {post.content.split('\n').map((paragraph, index) => (
                    paragraph ? (
                      <p key={index} className="text-gray-300 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ) : (
                      <br key={index} />
                    )
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
} 