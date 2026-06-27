"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Database, Cpu, Cloud, Settings, ShieldCheck, Palette } from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code className="w-5 h-5 text-blue-400" />,
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++"],
  },
  {
    category: "Frontend Development",
    icon: <Layout className="w-5 h-5 text-blue-400" />,
    items: ["React.js", "Next.js", "HTML5 & CSS3", "Tailwind CSS", "Flutter", "Bootstrap"],
  },
  {
    category: "Backend Development",
    icon: <Settings className="w-5 h-5 text-blue-400" />,
    items: ["Node.js", "Express.js", ".NET", "PHP", "Spring Boot"],
  },
  {
    category: "AI/ML & Data Science",
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    items: ["PyTorch", "TensorFlow", "Hugging Face", "OpenCV", "Deep Learning"],
  },
  {
    category: "Database Systems",
    icon: <Database className="w-5 h-5 text-blue-400" />,
    items: ["MySQL", "Microsoft SQL Server", "MongoDB", "Supabase", "PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    items: ["AWS (S3, EC2)", "Docker", "Git & GitHub", "Vercel"],
  },
  {
    category: "Testing & QA",
    icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    items: ["Selenium", "Playwright", "Postman APIs"],
  },
  {
    category: "Tools & Design",
    icon: <Palette className="w-5 h-5 text-blue-400" />,
    items: ["Figma", "Adobe Photoshop", "Google Colab", "MATLAB", "Visual Studio"],
  },
];

export default function Skills() {
  return (
    <section id="Skills" className="text-white py-16 flex flex-col items-center">
      <div className="pt-24 text-center flex flex-col items-center justify-center max-w-6xl w-full px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-blue-500 text-transparent bg-clip-text mb-4">
          Skills & Tech Stack
        </h2>
        <p className="text-blue-200/60 max-w-2xl text-center mb-12 text-sm sm:text-base">
          A comprehensive overview of my technical skills, development frameworks, and engineering tools.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.3)" }}
              className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-start border border-white/5 shadow-xl text-left h-full"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2 flex-grow">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-blue-100/70 hover:text-white transition-colors duration-200">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

