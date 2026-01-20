import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16"
      >
        <div className="max-w-5xl w-full">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl font-bold mb-2">About Me</h2>
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>

          {/* Content Card */}
       <motion.div
  whileHover={{
    scale: 1.02,
    boxShadow: "0 0 22px rgba(255,255,255,0.35)",
    borderColor: "rgb(255,255,255)",
  }}
  transition={{ type: "spring", stiffness: 200, damping: 14 }}
  className="
    bg-black
    border-l-4 border-white
    rounded-2xl p-8
    shadow-[0_0_15px_rgba(255,255,255,0.08)]
    transition-all duration-300
  "
>
  {/* Description */}
  <p className="text-gray-300 mb-6 leading-relaxed">
    I am a recent Computer Applications graduate with a robust
    technical foundation and hands-on experience from internships and
    project work. Eager to start my career in a progressive
    organization, I look forward to applying my knowledge and making a
    valuable contribution while expanding my professional skills.
  </p>

  <p className="text-gray-300 mb-6 leading-relaxed">
    I specialize in building dynamic, responsive user interfaces using
    HTML, CSS, JavaScript, and React. I’m proficient in version
    control with Git and GitHub, experienced in translating Figma
    designs into functional web interfaces, and skilled in leveraging
    frameworks like Bootstrap to craft clean, mobile-first layouts
    with strong attention to detail.
  </p>

  <p className="text-gray-400 mb-8 leading-relaxed">
    When I'm not coding, you can find me exploring new technologies,
    contributing to open-source projects, or expanding my knowledge in
    software development best practices.
  </p>

  {/* Skills Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 text-gray-200">
    {[
      "Responsive Web Design",
      "Git Version Control",
      "JavaScript (ES6+)",
      "REST API Integration",
      "React & Component Architecture",
      "UI / UX",
    ].map((skill, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05, color: "#ffffff" }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex items-center gap-2"
      >
        <FaCheckCircle className="text-white opacity-80" />
        <span>{skill}</span>
      </motion.div>
    ))}
  </div>
</motion.div>

        </div>
      </section>
    </>
  );
}

export default About;
