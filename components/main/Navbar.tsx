"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#hero"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            mjxlabs Portfolio
          </span>
        </a>

        <div className="md:hidden flex items-center" onClick={toggleNavbar}>
          {isOpen ? <FaTimes className="text-white" size={24} /> : <FaBars className="text-white" size={24} />}
        </div>

        {/* Sidebar for mobile */}
        <div className={`fixed inset-0 bg-black bg-opacity-75 z-40 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className={`flex flex-col items-center justify-center h-full transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <Link href="/" className="text-white text-lg py-2" onClick={toggleNavbar}>Home</Link>
            <Link href="/services" className="text-white text-lg py-2" onClick={toggleNavbar}>Services</Link>
            <Link href="/case-studies" className="text-white text-lg py-2" onClick={toggleNavbar}>Case Studies</Link>
            <Link href="/about" className="text-white text-lg py-2" onClick={toggleNavbar}>About Us</Link>
            <Link href="/contact" className="text-white text-lg py-2" onClick={toggleNavbar}>Contact</Link>
            <Link href="/get-quote" className="text-white text-lg py-2" onClick={toggleNavbar}>Get a Quote</Link>
          </div>
        </div>

        <div className={`md:flex ${isOpen ? "flex" : "hidden"} flex-col md:flex-row w-full md:w-auto h-full items-center justify-between md:mr-20`}>
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/" className="cursor-pointer mr-4">Home</Link>
            <Link href="/services" className="cursor-pointer mr-4">  Services</Link>
            <Link href="/case-studies" className="cursor-pointer mr-4">  Case Studies</Link>
            <Link href="/about" className="cursor-pointer mr-4">  About Us</Link>
            <Link href="/contact" className="cursor-pointer mr-4">  Contact</Link>
            <Link href="/get-quote" className="cursor-pointer mr-4">  Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
