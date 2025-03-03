"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Edit Blog Post</h1>
          <Link href={`/blog/${id}`} className="text-blue-500 hover:text-blue-700">
            Cancel
          </Link>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Image URL (optional)</label>
            <div className="flex">
              <input
                type="text"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleImageChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
              {submitting ? 'Saving...' : 'Save Changes'}
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
  );
} 