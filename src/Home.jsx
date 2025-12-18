import React from 'react'
import { motion } from "framer-motion";
import MyPhoto from './assets/1092=Alen.Jpg'
import { Link } from 'react-router-dom';
import About from './About';

function Home() {
  return (
    <>
         <section className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0d0d1a] to-[#130f40] text-white flex items-center justify-center px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 space-y-5"
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-blue-400 text-lg"
          >
             Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold"
          >
            {/* Muhammed{" "} */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              ALEN ANTO
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl font-semibold text-gray-200"
          >
            Full Stack Developer (MERN & MEAN)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-gray-400 max-w-xl"
          >
            Using cutting-edge technologies, I create scalable, high-performing full-stack web applications with an emphasis on user-centric design, robust architecture, and clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <Link to='/project'>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
              >
                View My Work
              </motion.button>
            </Link>

            <a href='/cv.pdf' download="Alen_Anto_CV.pdf">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition"
              >
                Download CV
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section (Profile Image) */}
        <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)",
        }}
        className="relative w-60 h-60 md:w-72 md:h-72 rounded-full p-[3px] bg-gradient-to-r from-blue-400 to-purple-500"
      >
        <img
          src={MyPhoto}
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4 border-[#0a0a0f]"
        />
      </motion.div>

      </div>
    </section>
    <About/>
    
    </>
  )
}

export default Home