"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaEdit, FaTrash, FaArrowLeft } from 'react-icons/fa';

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
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-xl">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  if (!post) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Post not found</h2>
        <p className="mt-2 text-gray-600">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link href="/blog" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
          Return to blog
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center">
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>
            <div className="flex space-x-4">
              <Link 
                href={`/blog/edit/${id}`} 
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <FaEdit className="mr-1" />
                Edit
              </Link>
              <button 
                onClick={handleDelete} 
                className="flex items-center text-red-600 hover:text-red-800"
                disabled={deleting}
              >
                <FaTrash className="mr-1" />
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
          
          <article className="bg-white rounded-xl shadow-md overflow-hidden">
            {post.imageURL && (
              <div className="relative h-80 w-full">
                <img 
                  src={post.imageURL} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-8">
                <div className="flex items-center mr-6">
                  <FaUser className="mr-2 text-blue-600" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-600" />
                  <span>{new Date(post.timestamp).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                {post.content.split('\n').map((paragraph, index) => (
                  paragraph ? <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p> : <br key={index} />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
} 