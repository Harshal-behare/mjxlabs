"use client";

import React from 'react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <button 
      onClick={handleClick} 
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <img src="/whatsapp-icon.svg" alt="WhatsApp" className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton; 