"use client";

import React from "react";
import { motion } from "framer-motion";
import Capabilities from "./Capabilities";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            AI Solutions Driven by Innovation & Human Expertise
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            MJX LABS is a combination of internal experts, global talent, and superior AI technology working together to build innovative companies and teams better.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Our Story</h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Founded in 2021, MJX LABS has been on a mission to connect companies with the best talent from around the world. Our unique approach combines AI technology with human expertise to ensure that every hire is a perfect fit.
          </p>
        </motion.div>

        <Capabilities />
      </div>
    </div>
  );
};

export default About;