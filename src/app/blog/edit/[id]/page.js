"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaTimes, FaImage } from 'react-icons/fa';

export default function EditBlogPost() {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    imageURL: '',
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/blogs/${id}`);
        const post = response.data.data;
        setFormData({
          title: post.title,
          content: post.content,
          author: post.author,
          imageURL: post.imageURL || '',
        });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await axios.put(`/api/blogs/${id}`, formData);
      router.push(`/blog/${id}`);
    } catch (err) {
      console.error('Error updating blog post:', err);
      setError('Failed to update blog post');
      setSubmitting(false);
    }
  };

  const clearImage = () => {
    setFormData((prev) => ({
      ...prev,
      imageURL: '',
    }));
    setPreviewImage(null);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error && !submitting) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Edit Blog Post
            </h1>
            <Link 
              href={`/blog/${id}`} 
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Post
            </Link>
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="mb-8 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-red-400">{error}</p>
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
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}