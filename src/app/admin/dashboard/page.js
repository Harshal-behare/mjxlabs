"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { FaUsers, FaBlog, FaSignOutAlt, FaCheck, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
      return;
    }

    // Set up axios headers
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Fetch blog posts
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/blogs');
      setPosts(response.data.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to fetch posts');
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };



  const handleDeletePost = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`/api/blogs/${postId}`);
        fetchPosts(); // Refresh posts after deletion
      } catch (err) {
        console.error('Error deleting post:', err);
        alert('Failed to delete post');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="fixed w-64 h-full bg-gray-900 border-r border-gray-800">
        <div className="p-6">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            MJX LABS
          </Link>
        </div>
        <nav className="mt-6">
          <button
            onClick={() => setActiveTab('posts')}
            className={`w-full flex items-center px-6 py-3 text-gray-400 hover:text-white hover:bg-gray-800 ${activeTab === 'posts' ? 'bg-gray-800 text-white' : ''}`}
          >
            <FaBlog className="mr-3" />
            Blog Posts
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center px-6 py-3 text-gray-400 hover:text-white hover:bg-gray-800 ${activeTab === 'users' ? 'bg-gray-800 text-white' : ''}`}
          >
            <FaUsers className="mr-3" />
            Users
          </button>
        </nav>
        <button
          onClick={handleLogout}
          className="absolute bottom-0 w-full p-4 flex items-center text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'posts' ? (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Blog Posts</h1>
                <Link
                  href="/blog/new"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create New Post
                </Link>
              </div>
            
              {/* Posts Table */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Author</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Date</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {posts.map((post) => (
                      <tr key={post._id} className="hover:bg-gray-800/50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {post.imageURL && (
                              <div className="flex-shrink-0 h-10 w-10 mr-3">
                                <Image
                                  src={post.imageURL}
                                  alt={post.title}
                                  width={40}
                                  height={40}
                                  className="rounded object-cover"
                                  unoptimized={post.imageURL.startsWith('http')}
                                />
                              </div>
                            )}
                            <div className="truncate max-w-md">{post.title}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                          {post.author}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                            Published
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                          {new Date(post.timestamp).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex items-center justify-end space-x-3">

                            <Link
                              href={`/blog/edit/${post._id}`}
                              className="text-blue-400 hover:text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full flex items-center gap-1"
                              title="Edit"
                            >
                              <FaEdit className="text-sm" />
                              <span className="text-xs">Edit</span>
                            </Link>
                            <button
                              onClick={() => handleDeletePost(post._id)}
                              className="text-red-400 hover:text-red-300 bg-red-500/10 px-3 py-1 rounded-full flex items-center gap-1"
                              title="Delete"
                            >
                              <FaTrash className="text-sm" />
                              <span className="text-xs">Delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-bold mb-8">User Management</h1>
              <p className="text-gray-400">User management features coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}