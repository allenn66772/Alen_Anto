import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 z-50 w-full
        bg-[#0a0a0f]
        text-white py-4 shadow-md
      "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6">
        
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="
            text-2xl font-bold cursor-pointer text-white
            transition
            hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
          "
        >
          Portfolio
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["/", "/about", "/skill", "/project", "/contact"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="
                text-gray-300 font-medium transition
                hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]
              "
            >
              {["Home", "About", "Skills", "Projects", "Contact"][i]}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a0f] px-6 py-4 space-y-4"
          >
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Skills", path: "/skill" },
              { name: "Projects", path: "/project" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-blue-400 text-lg transition"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
