"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { FaImage, FaTimes } from 'react-icons/fa';

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
    
    // Set preview image
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
      router.push('/blog');
    } catch (err) {
      console.error('Error creating blog post:', err);
      setError('Failed to create blog post: ' + (err.response?.data?.error || err.message));
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Create New Blog Post</h1>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
              Cancel
            </Link>
          </div>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
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
          )}
          
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Enter post title"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Enter author name"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="https://example.com/image.jpg"
                />
                {formData.imageURL && (
                  <button 
                    type="button" 
                    onClick={clearImage}
                    className="bg-red-500 text-white px-3 rounded-r-lg hover:bg-red-600"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Enter a URL for the featured image of your blog post
              </p>
              
              {previewImage && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Image Preview:</p>
                  <div className="relative h-48 w-full bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={previewImage} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                      onError={() => setPreviewImage(null)}
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
                rows="12"
                placeholder="Write your blog post content here..."
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Use line breaks to separate paragraphs
              </p>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex items-center"
                disabled={submitting}
              >
                {submitting ? 'Publishing...' : 'Publish Post'}
                {!submitting && (
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 