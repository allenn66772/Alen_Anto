import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      {/* Title */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
        <div className="w-24 h-[2px] bg-white mx-auto"></div>
        <p className="text-gray-400 mt-4">
          Let’s work together to bring your ideas to life
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
        {/* Email Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(255,255,255,0.25)",
          }}
          className="bg-[#0b0b0b] rounded-2xl p-10 flex flex-col items-center justify-center text-center border border-gray-800 hover:border-white transition-all"
        >
          <MdEmail className="text-5xl mb-4 text-white" />
          <h3 className="text-2xl font-semibold mb-1">Email Me</h3>
          <p className="text-gray-500 mb-6">alenanto05@gmail.com</p>
          <a
            href="mailto:alenanto05@gmail.com"
            className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Send Email
          </a>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.4}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(255,255,255,0.25)",
          }}
          className="bg-[#0b0b0b] rounded-2xl p-10 flex flex-col items-center justify-center text-center border border-gray-800 hover:border-white transition-all"
        >
          <FaLinkedinIn className="text-5xl mb-4 text-white" />
          <h3 className="text-2xl font-semibold mb-1">LinkedIn</h3>
          <p className="text-gray-500 mb-6">
            Let’s connect professionally
          </p>
          <a
            href="https://www.linkedin.com/in/alen-anto-171199269"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Visit Profile
          </a>
        </motion.div>
      </div>

      {/* Social Media Links */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0.6}
        className="flex flex-col items-center"
      >
        <h3 className="text-xl font-semibold mb-6">
          Find me on social media
        </h3>
        <div className="flex gap-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/allenn66772" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/alen-anto-171199269" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/_._allenn._?igsh=ZjM3bDVwbGxuZXF6" },
            { icon: <FaXTwitter />, link: "https://x.com/alenanto05?t=ZrF86l0mBKuP67m_UmhEhw&s=08" },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px rgba(255,255,255,0.25)",
              }}
              className="text-xl w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-white transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
