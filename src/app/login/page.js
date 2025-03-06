"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('/api/auth/login', formData);
      if (response.data.success) {
        // Store the token
        localStorage.setItem('authToken', response.data.token);
        // Redirect to admin dashboard
        router.push('/admin/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-95">
      <div className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            MJX LABS
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Admin Login</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mb-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                Logging in...
              </>
            ) : (
              'LOG IN'
            )}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-8 flex justify-center space-x-4 text-sm text-gray-500">
          <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Use</Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy policy</Link>
        </div>
      </div>
    </div>
  );
} 
