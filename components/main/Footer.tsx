"use client";

import React from "react";
import { FaYoutube, FaDiscord, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-200 shadow-lg p-6">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4">
          <h2 className="font-bold text-lg">Community</h2>
          <p className="flex items-center my-2 cursor-pointer">
            <FaYoutube className="mr-2" />
            <span>Youtube</span>
          </p>
          <p className="flex items-center my-2 cursor-pointer">
            <FaInstagram className="mr-2" />
            <span>Instagram</span>
          </p>
          <p className="flex items-center my-2 cursor-pointer">
            <FaDiscord className="mr-2" />
            <span>Discord</span>
          </p>
        </div>

        <div className="mb-4">
          <h2 className="font-bold text-lg">Quick Links</h2>
          <div className="flex flex-col">
            <Link href="/services" className="my-2 cursor-pointer">Services</Link>
            <Link href="/case-studies" className="my-2 cursor-pointer">Case Studies</Link>
            <Link href="/about" className="my-2 cursor-pointer">About Us</Link>
            <Link href="/contact" className="my-2 cursor-pointer">Contact</Link>
            <Link href="/get-quote" className="my-2 cursor-pointer">Get a Quote</Link>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="font-bold text-lg">Contact Us</h2>
          <p>Phone: +1 234 567 890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <h2 className="text-lg font-bold">Follow Us</h2>
        <p>
          <a href="#" className="text-blue-400 hover:underline">Facebook</a> | 
          <a href="#" className="text-blue-400 hover:underline"> Twitter</a> | 
          <a href="#" className="text-blue-400 hover:underline"> LinkedIn</a>
        </p>
      </div>

      <div className="text-center mt-4 text-sm">
        &copy; mjxlabs 2025 Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;