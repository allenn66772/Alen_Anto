import React from "react";
import { motion } from "framer-motion";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNode,
  FaAngular,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

function Skill() {
  const skills = [
    { icon: <SiJavascript className="text-5xl text-white" />, title: "JavaScript", desc: "ES6+ and modern features" },
    { icon: <DiMongodb className="text-5xl text-white" />, title: "MongoDB", desc: "NoSQL database and schema design" },
    { icon: <FaReact className="text-5xl text-white" />, title: "React", desc: "Component-based development" },
    { icon: <FaNode className="text-5xl text-white" />, title: "Node.js", desc: "Backend development with REST APIs and middleware" },
    { icon: <FaAngular className="text-5xl text-white" />, title: "Angular", desc: "Frontend framework for MEAN stack applications" },
    { icon: <RiTailwindCssFill className="text-5xl text-white" />, title: "Tailwind CSS", desc: "Responsive utility-first framework" },
    { icon: <FaGitAlt className="text-5xl text-white" />, title: "Git", desc: "Version control system" },
    { icon: <FaGithub className="text-5xl text-white" />, title: "GitHub", desc: "Code collaboration" },
    { icon: <FaHtml5 className="text-5xl text-white" />, title: "HTML5", desc: "Semantic markup and accessibility" },
    { icon: <FaCss3Alt className="text-5xl text-white" />, title: "CSS3", desc: "Modern layouts and animations" },
    { icon: <FaFigma className="text-5xl text-white" />, title: "Figma", desc: "UI/UX design tool" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">My Skills</h2>
        <div className="w-24 h-1 bg-white rounded-full mx-auto"></div>
        <p className="text-gray-400 mt-4">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 18px rgba(255,255,255,0.35)",
            }}
            className="
              bg-[#0f0f16]
              border border-white/10
              rounded-xl p-8
              flex flex-col items-center text-center
              hover:border-white
              transition-all duration-300
            "
          >
            <div className="mb-4 opacity-90">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
