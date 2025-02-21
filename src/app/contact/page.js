"use client";

import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black bg-opacity-95 text-white py-20 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Have any questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Your Inquiry</label>
                <select className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option value="" className="bg-gray-900">Select...</option>
                  <option value="general" className="bg-gray-900">General Inquiry</option>
                  <option value="support" className="bg-gray-900">Technical Support</option>
                  <option value="partnership" className="bg-gray-900">Partnership</option>
                  <option value="other" className="bg-gray-900">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Office Location
              </h3>
              <p className="mt-2 text-gray-400">
                123 Innovation Street<br />
                Tech Valley, CA 94043<br />
                United States
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <p className="mt-2 text-gray-400">
                Email: contact@mjxlabs.com<br />
                Phone: +1 (555) 123-4567<br />
                Hours: Mon-Fri 9:00 AM - 6:00 PM PST
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-indigo-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Follow Us
              </h3>
              <div className="mt-2 space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 