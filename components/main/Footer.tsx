import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <table className="w-full">
        <tbody>
          <tr>
            {/* Social Media Links */}
            <td className="min-w-[200px] h-auto flex flex-col items-start justify-start mb-4">
              <div className="font-bold text-[16px]">Community</div>
              <p className="flex flex-row items-center my-[5px] cursor-pointer">
                <FaYoutube />
                <span className="text-[12px] ml-[6px]">Youtube</span>
              </p>
              <p className="flex flex-row items-center my-[5px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[12px] ml-[6px]">Github</span>
              </p>
              <p className="flex flex-row items-center my-[5px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[12px] ml-[6px]">Discord</span>
              </p>
            </td>

            {/* Quick Links */}
            <td className="min-w-[200px] h-auto flex flex-col items-start justify-start mb-4">
              <div className="font-bold text-[16px]">Quick Links</div>
              <Link href="/services" className="text-[12px] cursor-pointer">Services</Link>
              <Link href="/case-studies" className="text-[12px] cursor-pointer">Case Studies</Link>
              <Link href="/about" className="text-[12px] cursor-pointer">About Us</Link>
              <Link href="/contact" className="text-[12px] cursor-pointer">Contact</Link>
              <Link href="/get-quote" className="text-[12px] cursor-pointer">Get a Quote</Link>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mb-[20px] text-[12px] text-center">
        &copy; mjxlabs 2025 Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;