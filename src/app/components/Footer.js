"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Tagline Section */}
        <div className="flex flex-col mb-6">
          <img src="/logo.svg" alt="Logo" className="w-24 h-auto mb-2" />
          <h2 className="text-lg font-bold">MJX LABS</h2>
          <p className="text-sm text-gray-400">We build your dreams</p>
        </div>
        <div className="flex flex-col mb-6">
          <h4 className="font-bold text-lg">Product</h4>
          <ul className="mt-2">
            <li><Link href="#" className="hover:underline">Features</Link></li>
            <li><Link href="#" className="hover:underline">Security</Link></li>
            <li><Link href="#" className="hover:underline">Mobile App</Link></li>
            <li><Link href="#" className="hover:underline">Pricing</Link></li>
          </ul>
        </div>
        <div className="flex flex-col mb-6">
          <h4 className="font-bold text-lg">Company</h4>
          <ul className="mt-2">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div className="flex flex-col mb-6">
          <h4 className="font-bold text-lg">Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest updates and features.</p>
          <div className="flex flex-col md:flex-row mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded border border-gray-300 text-black"
            />
            <button className="mt-2 md:mt-0 md:ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm">copyright © 2025 MJX LABS. All rights reserved.</div>
        <div className="flex space-x-4">
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
        {/* facebook logo*/}
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </Link>
          {/* twitter logo */}
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <a class="transition-colors duration-200" href="https://x.com/huly_io" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" class="h-4.5 w-4.5 translate-y-0 opacity-80 transition-opacity duration-300 hover:opacity-100">
                <g clip-path="url(#twitter_inline_svg__a)">
                  <path fill="url(#twitter_inline_svg__b)" fill-rule="evenodd" d="M12.045 16.75h5.377L5.512 1H-.003l6.776 8.858-6.142 7.017h2.673l4.716-5.385zm2.218-1.6h-1.48L3.118 2.516h1.589zM9.589 6.18l4.42-5.055h2.672L10.827 7.82z" clip-rule="evenodd"></path>
                </g>
                <defs>
                  <linearGradient id="twitter_inline_svg__b" x1="8.999" x2="8.999" y1="1.125" y2="16.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C9CBCF"></stop>
                    <stop offset="1" stop-color="#C9CBCF" stop-opacity="0.8"></stop>
                  </linearGradient>
                  <clipPath id="twitter_inline_svg__a">
                    <path fill="#fff" d="M0 0h18v18H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </Link>
          {/* linkedin logo */}
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <a class="transition-colors duration-200" href="https://www.linkedin.com/company/hardcoreeng/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" class="h-4.5 w-4.5 translate-y-0 opacity-80 transition-opacity duration-300 hover:opacity-100">
                <g clip-path="url(#linkedin_inline_svg__a)">
                  <path fill="url(#linkedin_inline_svg__b)" d="M16.425.9H1.575C1.17.9.9 1.17.9 1.575v14.85c0 .405.27.675.675.675h14.85c.405 0 .675-.27.675-.675V1.575c0-.405-.27-.675-.675-.675M5.693 14.737H3.33V6.975h2.43v7.762zM4.478 5.895A1.426 1.426 0 0 1 3.06 4.477c0-.742.608-1.417 1.418-1.417.742 0 1.417.607 1.417 1.417s-.607 1.418-1.417 1.418m10.26 8.842h-2.43v-3.78c0-.877 0-2.025-1.215-2.025-1.283 0-1.418.945-1.418 1.958v3.847h-2.43V6.975H9.54v1.08c.338-.608 1.08-1.215 2.295-1.215 2.43 0 2.903 1.62 2.903 3.712z"></path>
                </g>
                <defs>
                  <linearGradient id="linkedin_inline_svg__b" x1="9" x2="9" y1="0.9" y2="17.1" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C9CBCF"></stop>
                    <stop offset="1" stop-color="#C9CBCF" stop-opacity="0.8"></stop>
                  </linearGradient>
                  <clipPath id="linkedin_inline_svg__a">
                    <path fill="#fff" d="M0 0h18v18H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
          </Link>
          {/* instagram logo */}
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
          </Link>
          {/* youtube logo */}
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <a class="transition-colors duration-200" href="https://www.youtube.com/@huly_io" aria-label="Youtube" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" class="h-4.5 w-4.5 translate-y-0 opacity-80 transition-opacity duration-300 hover:opacity-100">
                <path fill="url(#youtube_inline_svg__a)" d="M17.775 5.4c-.225-1.463-.9-2.475-2.475-2.7-2.475-.45-6.3-.45-6.3-.45s-3.825 0-6.3.45C1.125 2.925.337 3.937.225 5.4 0 6.862 0 9 0 9s0 2.137.225 3.6.9 2.475 2.475 2.7c2.475.45 6.3.45 6.3.45s3.825 0 6.3-.45c1.575-.338 2.25-1.238 2.475-2.7S18 9 18 9s0-2.137-.225-3.6M6.75 12.375v-6.75L12.375 9z"></path>
                <defs>
                  <linearGradient id="youtube_inline_svg__a" x1="9" x2="9" y1="2.25" y2="15.75" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C9CBCF"></stop>
                    <stop offset="1" stop-color="#C9CBCF" stop-opacity="0.8"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <img src="/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
          </Link>
        </div>
        <div className="text-sm text-center mt-2">Made with Passion and MJXLABS</div>
      </div>
    </footer>
  );
};

export default Footer; 