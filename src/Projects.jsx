import React from "react";
import { motion } from "framer-motion";
import pic1 from "./assets/Screenshot 2025-11-05 215417.png";
import pic2 from "./assets/Screenshot 2025-11-05 215915.png";
import pic3 from "./assets/Screenshot 2025-11-05 220250.png";
import pic4 from "./assets/Screenshot 2025-11-05 220412.png";
import pic5 from "./assets/Screenshot 2026-01-19 093942.png";

function Projects() {
  const projects = [
    {
      title: "Book-Store",
      desc: "A full stack project build in MERN In Which user can sell their books buy books",
      image: pic5,
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      demo: "https://book-store-frontend-gules-two.vercel.app/",
      github: "",
    },
    {
      title: "Resume Builder",
      desc: "An interactive Resume Builder for creating ATS Friendly resumes",
      image: pic2,
      tags: ["Hooks", "React", "Tailwind", "Vite", "Json Server"],
      demo: "https://resume-builder-frontend-sooty-alpha.vercel.app/",
      github: "#",
    },
    {
      title: "Student Dashboard",
      desc: "A Responsive Web Application made for teachers to add student data and mark attendence",
      image: pic4,
      tags: ["React", "Framer Motion", "Tailwind", "Vite", "Json Server"],
      demo: "https://student-dashboard-self-eight.vercel.app/",
      github: "#",
    },
    {
      title: "Country-Info",
      desc: "A simple web application to show country details by entering its name",
      image: pic3,
      tags: ["React", "Tailwind", "API"],
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
    <section className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2">My Projects</h2>
        <div className="w-24 h-[2px] bg-white mx-auto"></div>
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
              boxShadow: "0 0 25px rgba(255,255,255,0.25)",
            }}
            className="bg-[#0b0b0b] rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-white transition-all duration-300"
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
                    className="bg-black border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
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
                  className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
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
