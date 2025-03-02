"use client";

import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !message) {
      setStatus('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus('Please enter a valid email address');
      return;
    }

    setStatus('Sending...');

    try {
      const formData = new FormData();
      formData.append('Name', name);
      formData.append('Email', email);
      formData.append('Phone', phone);
      formData.append('Message', message);
      formData.append('Timestamp', new Date().toISOString());

      const response = await fetch('https://script.google.com/macros/s/AKfycbyB7s27-jzEXnkyLoPdvzXlRyqSA4B7SMTd_aZ1x9b35u-j0PZT2Ml5NeAgiaJDFW83/exec', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('We will get back to you soon!');
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

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
          <div className="bg-gradient-to-br from-gray-90/50 to-black/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                <input
                  type="text"
                  placeholder="Narayan rav"
                  name="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Phone No.</label>
                <input
                  type="tel"
                  placeholder="+91 1234567890"
                  name="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message *</label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  name="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                disabled={status === 'Sending...'}
              >
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
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
             📍Virtual Office: WeWork Enab, BKC, Mumbai
             📍 Physical Office: Gangadham Phase 1, C1-401, Pune
               </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <p className="mt-2 text-gray-400">
                Email: contact@mjxlabs.com<br />
                Phone: 9226167634 <br />
                Hours: Mon-Fri 9:00 AM - 6:00 PM PST
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-indigo-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Follow Us
              </h3>
              <div className="mt-2 space-x-4">
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://x.com" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {status && <p className="mt-4 text-center text-gray-400">{status}</p>}
    </div>
  );
};

export default ContactUs;