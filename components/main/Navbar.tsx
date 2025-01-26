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

        <div className={`md:flex ${isOpen ? "flex" : "hidden"} flex-col md:flex-row w-full md:w-auto h-full items-center justify-between md:mr-20`}>
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#about-us" className="cursor-pointer">About Us</Link>
            <Link href="#services" className="cursor-pointer">Services</Link>
            <Link href="#case-studies" className="cursor-pointer">Case Studies</Link>
            <Link href="#contact" className="cursor-pointer">Contact</Link>
            <Link href="#get-quote" className="cursor-pointer">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
