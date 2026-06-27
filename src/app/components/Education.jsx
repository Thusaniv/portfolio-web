"use client";
import React from "react";
import { GraduationCap, Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const timelineData = [
  {
    period: "Nov 2025 — Present",
    type: "Experience",
    title: "Software Engineer",
    institution: "Softvision IT Groups (Pvt) Ltd",
    icon: <Briefcase className="w-4 h-4 text-blue-400" />,
    description: "Developed a cloud-based ERP system using TypeScript, Node.js, and Microsoft SQL Server. Designed and developed a Flutter-based payroll mobile application.",
  },
  {
    period: "Jun 2025 — Nov 2025",
    type: "Experience",
    title: "Trainee Software Engineer",
    institution: "Softvision IT Groups (Pvt) Ltd",
    icon: <Briefcase className="w-4 h-4 text-blue-400" />,
    description: "Developed a full-stack Payroll Management System using React, Node, Express, and MySQL. Implemented RESTful APIs for backend services and frontend integration.",
  },
  {
    period: "Jun 2021 — Dec 2025 (Expected Oct 2026)",
    type: "Education",
    title: "BSc (Hons) in Computer Science",
    institution: "University of Jaffna, Sri Lanka",
    icon: <GraduationCap className="w-4 h-4 text-blue-400" />,
    description: "Successfully pursuing a Computer Science Honours degree. Second Class (Upper Division).",
  },
  {
    period: "May 2017 — Aug 2019",
    type: "Education",
    title: "G.C.E. Advanced Level (Physical Science)",
    institution: "T/ Sri Shanmuga Hindu Ladies College, Sri Lanka",
    icon: <GraduationCap className="w-4 h-4 text-blue-400" />,
    description: "Completed secondary education in physical science stream. Results: B, 2C | Z-Score: 1.1251.",
  }
];

export default function CareerTimeline() {
  return (
    <section className="text-white" id="Education">
      <div className="pt-24 flex flex-col items-center justify-center">
        <div className="text-center space-y-2 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-blue-500 text-transparent bg-clip-text">
            Career Timeline
          </h2>
        </div>

        <div className="relative max-w-3xl w-full px-6">
          {/* Vertical Line on the left */}
          <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-indigo-950 opacity-40" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-12 group"
              >
                {/* Outer Timeline Dot */}
                <div className="absolute left-8 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-blue-500 bg-[#0a0f1e] group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#0a0f1e] rounded-full" />
                </div>

                <div className="space-y-3">
                  {/* Capsule Tag Info */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/20 text-blue-400">
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-blue-200/40">
                      • {item.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Institution / Company */}
                  <div className="flex items-center gap-2 text-sm text-blue-200/60 font-semibold">
                    <span className="p-1 bg-blue-500/10 rounded-md">
                      {item.icon}
                    </span>
                    <span>{item.institution}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-blue-100/70 max-w-2xl leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


