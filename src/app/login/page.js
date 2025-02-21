"use client";

import React from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-95">
      <div className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            MJX LABS
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Sign in to MJX LABS</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="name@work-email.com"
            className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Login Button */}
        <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mb-4">
          LOG IN
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-800"></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="flex-1 border-t border-gray-800"></div>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          <button className="w-full py-2 px-4 rounded-lg border border-gray-700 text-gray-300 font-medium flex items-center justify-center hover:bg-gray-800/50 transition-colors">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            Sign in with Google
          </button>
          
          <button className="w-full py-2 px-4 rounded-lg border border-gray-700 text-gray-300 font-medium flex items-center justify-center hover:bg-gray-800/50 transition-colors">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Sign in with GitHub
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-gray-500">
          Don't have an account? {' '}
          <Link href="/signup" className="text-blue-500 hover:text-blue-400 transition-colors">
            Sign up
          </Link>
        </div>

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