"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { FaImage, FaTimes, FaArrowLeft } from 'react-icons/fa';

export default function NewBlogPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    imageURL: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageUrl = e.target.value;
    setFormData((prev) => ({
      ...prev,
      imageURL: imageUrl,
    }));
    
    if (imageUrl) {
      setPreviewImage(imageUrl);
    }
  };

  const clearImage = () => {
    setFormData((prev) => ({
      ...prev,
      imageURL: '',
    }));
    setPreviewImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await axios.post('/api/blogs', formData);
      router.push('/admin/dashboard');
    } catch (err) {
      console.error('Error creating blog post:', err);
      setError('Failed to create blog post: ' + (err.response?.data?.error || err.message));
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Create New Blog Post
            </h1>
            <Link 
              href="/blog" 
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="mb-8 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-center">
                <FaTimes className="text-red-400 mr-3" />
                <p className="text-red-400">{error}</p>
              </div>
            </div>
          )}
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-800/50 p-8">
            {/* Title */}
            <div className="mb-6">
              <label className="block text-gray-300 font-medium mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                placeholder="Enter your post title"
                required
              />
            </div>
            
            {/* Author */}
            <div className="mb-6">
              <label className="block text-gray-300 font-medium mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                placeholder="Enter author name"
                required
              />
            </div>
            
            {/* Image URL */}
            <div className="mb-6">
              <label className="block text-gray-300 font-medium mb-2">
                <div className="flex items-center">
                  <FaImage className="mr-2" />
                  Featured Image URL
                </div>
              </label>
              <div className="flex">
                <input
                  type="text"
                  name="imageURL"
                  value={formData.imageURL}
                  onChange={handleImageChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="https://example.com/image.jpg"
                />
                {formData.imageURL && (
                  <button 
                    type="button" 
                    onClick={clearImage}
                    className="px-4 bg-red-500/20 text-red-400 rounded-r-lg hover:bg-red-500/30 transition-colors duration-300"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Enter a URL for the featured image of your blog post
              </p>
              
              {/* Image Preview */}
              {previewImage && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-300 mb-2">Image Preview:</p>
                  <div className="relative h-48 w-full bg-gray-800 rounded-lg overflow-hidden">
                    <Image 
                      src={previewImage} 
                      alt="Preview" 
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                      onError={() => setPreviewImage(null)}
                      unoptimized={previewImage.startsWith('http')}
                    />
                  </div>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="mb-8">
              <label className="block text-gray-300 font-medium mb-2">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                rows="12"
                placeholder="Write your blog post content here..."
                required
              />
              <p className="text-sm text-gray-400 mt-2">
                Use line breaks to separate paragraphs
              </p>
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Publishing...
                  </>
                ) : (
                  'Publish Post'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}