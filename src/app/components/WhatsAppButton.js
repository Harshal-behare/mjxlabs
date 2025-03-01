"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/9226167634', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <button 
      onClick={handleClick} 
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      aria-label="Chat with us on WhatsApp"
    >
        <FaWhatsapp className="text-2xl" />
      
    </button>
  );
};

export default WhatsAppButton; 