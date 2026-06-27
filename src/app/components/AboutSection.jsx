"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, FileText, Code2, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
    value: "Software Engineer",
    label: "Softvision IT Groups",
  },
  {
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
    value: "2 Publications",
    label: "ICARC & SL-SWCS",
  },
  {
    icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
    value: "10+ Projects",
    label: "Full Stack & AI",
  },
  {
    icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
    value: "BSc Hons (CS)",
    label: "Second Class (Upper Division)",
  },
];

const AboutSection = () => {
  return (
    <section className="text-white mt-12 sm:mt-16 mb-12 sm:mb-16 px-2 sm:px-4" id="about">
      <div className="pt-16 sm:pt-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-blue-500 text-transparent bg-clip-text mb-6 sm:mb-8 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-5xl w-full">
          {/* Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="glass-panel p-5 sm:p-8 rounded-2xl border border-white/5 shadow-2xl">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-blue-100/90 text-justify mb-4">
                I am a Software Engineer at Softvision IT Groups (Pvt) Ltd and a Computer Science undergraduate at the University of Jaffna, Sri Lanka. With a strong interest in deep learning and intelligent web architectures, I love bridging the gap between full-stack application logic and machine learning performance.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-blue-100/90 text-justify">
                My professional experience covers developing cloud-based ERP systems, Flutter-based payroll mobile applications, and interactive WebGL metrics dashboards. I strive to build clean, maintainable, and high-performance solutions that solve complex real-world challenges.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.3)" }}
                className="glass-panel-interactive p-4 sm:p-6 rounded-2xl flex flex-col justify-between border border-white/5 h-full"
              >
                <div className="mb-3 sm:mb-4 bg-blue-500/10 w-fit p-2 sm:p-3 rounded-xl">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 leading-tight">
                    {stat.value}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-blue-200/60">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
