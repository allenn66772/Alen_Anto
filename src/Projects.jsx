import React from "react";
import { motion } from "framer-motion";
import pic1 from "./assets/Screenshot 2025-11-05 215417.png";
import pic2 from "./assets/Screenshot 2025-11-05 215915.png";
import pic3 from "./assets/Screenshot 2025-11-05 220250.png";
import pic4 from "./assets/Screenshot 2025-11-05 220412.png";

function Projects() {
  const projects = [
   {
      title: "Student Dashboard",
      desc: "A Responsive Web Application made for teachers to add student data and mark attendence",
      image: pic4,
      tags: ["React", "Framer Motion", "Tailwind", "Vite","Json Server"],
      demo: "https://student-dashboard-self-eight.vercel.app/",
      github: "#",
    },
    
    {
      title: "Resume Builder",
      desc: "An interactive Resume Builder for creating ATS Friendly resumes",
      image: pic2,
      tags: [ "Hooks", "React", "Tailwind", "Vite","Json Server"],
      demo: "https://resume-builder-frontend-sooty-alpha.vercel.app/",
      github: "#",
    },
    {
      title: "Country-Info",
      desc: "A simple web application to show country details by entering its name ",
      image: pic3,
      tags: ["React", "Tailwind",  "API"],
      demo: "https://country-info-kappa.vercel.app/",
      github: "#",
    },
    {
      title: "Weather App",
      desc: "A responsive web application that displays real-time weather of entered city",
      image: pic1,
      tags: ["React", "API", "CSS3", "JavaScript"],
      demo: "https://weatherapp-coral-tau.vercel.app/",
      github: "#",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center px-6 py-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2">My Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
        <p className="text-gray-400 mt-4">
          A selection of my recent work and side projects
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover={{
              scale: 1.03,
              y: -8,
              boxShadow: "0 0 30px rgba(59,130,246,0.4)",
            }}
            className="bg-[#11111a] rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-blue-400 transition-all duration-300"
          >
            <motion.img
              src={p.image}
              alt={p.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1a1a24] text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-medium hover:opacity-90 transition"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full border border-blue-400 text-blue-400 font-medium hover:bg-blue-400 hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
