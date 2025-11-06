import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#0a0a0f] text-white py-4 shadow-md"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Portfolio
        </motion.h1>

        {/* Navigation Links */}
        <nav className="space-x-8 flex">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link to="/" className="text-gray-300 hover:text-blue-400 font-medium">
              Home
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link to="/about" className="text-gray-300 hover:text-blue-400 font-medium">
              About
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link to="/skill" className="text-gray-300 hover:text-blue-400 font-medium">
              Skills
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link to="/project" className="text-gray-300 hover:text-blue-400 font-medium">
              Projects
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link to="/contact" className="text-gray-300 hover:text-blue-400 font-medium">
              Contact
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
