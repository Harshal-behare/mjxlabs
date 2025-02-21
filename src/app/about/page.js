"use client";

import React from "react";
import { motion } from "framer-motion";

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
            AI Powered, Human Led
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
            Founded in 2018, MJX LABS has been on a mission to connect companies with the best talent from around the world. Our unique approach combines AI technology with human expertise to ensure that every hire is a perfect fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Harshal Behare",
                role: "Lead Developer",
                description: "Expert in full-stack development with 10+ years of experience in building scalable applications.",
                image: "https://randomuser.me/api/portraits/men/1.jpg"
              },
              {
                name: "Anuj Mahajan",
                role: "Product Manager",
                description: "Specializes in product strategy and execution with a track record of successful product launches.",
                image: "https://randomuser.me/api/portraits/men/2.jpg"
              },
              {
                name: "Mayur Agrawal",
                role: "Data Scientist",
                description: "Expert in data analysis and machine learning with focus on AI-driven solutions.",
                image: "https://randomuser.me/api/portraits/men/3.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                <p className="text-blue-400 text-center">{member.role}</p>
                <p className="text-gray-400 mt-4 text-center">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">Our Journey</h2>
          <div className="mt-12 relative">
            {[
              { year: "2018", event: "Founded MJX LABS", color: "blue" },
              { year: "2019", event: "Launched our first product", color: "green" },
              { year: "2020", event: "Expanded to international markets", color: "purple" },
              { year: "2021", event: "Reached 1,000 successful placements", color: "pink" },
              { year: "2022", event: "Introduced AI-driven matching technology", color: "yellow" },
              { year: "2023", event: "Partnered with leading tech companies", color: "red" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className={`text-2xl font-bold text-${milestone.color}-400`}>{milestone.year}</div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 flex-1 shadow-lg">
                  {milestone.event}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { org: "Forbes", award: "Best Startup of 2022", icon: "🏆" },
              { org: "Fast Company", award: "Most Innovative Company 2023", icon: "⭐" },
              { org: "Deloitte", award: "Fastest Growing Tech Company 2023", icon: "🚀" }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{award.icon}</div>
                <h3 className="text-xl font-bold">{award.org}</h3>
                <p className="text-gray-400 mt-2">{award.award}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Engage with MJX LABS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Start Your Journey",
                description: "Innovate your business with AI-powered talent",
                color: "from-blue-600 to-blue-400"
              },
              {
                title: "Work at MJX LABS",
                description: "Join our AI infrastructure company",
                color: "from-green-600 to-green-400"
              },
              {
                title: "Partner with Us",
                description: "Get matched to high-paying jobs",
                color: "from-purple-600 to-purple-400"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`bg-gradient-to-r ${item.color} rounded-2xl p-8 text-center cursor-pointer transform hover:scale-105 transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;