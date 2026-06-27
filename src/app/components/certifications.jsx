"use client";
import React from "react";
import { BadgeCheck, ExternalLink, Award } from "lucide-react";
import { motion } from "framer-motion";

const certificationData = [
  {
    institution: "Centre for Open & Distance Learning (CODL) University of Moratuwa",
    icon: <Award className="w-6 h-6 text-blue-400" />,
    certifications: [
      {
        title: "Python for Beginners",
        details: "Credential ID: YnFBpLhrCQ",
        year: 2025,
      },
      {
        title: "Foundations of Project Management",
        details: "Credential ID: Q2981tsyaX",
        year: 2025,
      },
    ],
  },
  {
    institution: "HackerRank Academy",
    icon: <BadgeCheck className="w-6 h-6 text-blue-400" />,
    certifications: [
      {
        title: "JavaScript (Basic)",
        details: "Verified Skills Assessment",
        link: "https://www.hackerrank.com/certificates/verify/js-basic",
      },
      {
        title: "JavaScript (Intermediate)",
        details: "Verified Skills Assessment",
        link: "https://www.hackerrank.com/certificates/verify/js-intermediate",
      },
      {
        title: "C# (Basic)",
        details: "Verified Skills Assessment",
        link: "https://www.hackerrank.com/certificates/verify/csharp-basic",
      },
      {
        title: "Problem Solving (Basic)",
        details: "Algorithm & Data Structures Assessment",
        link: "https://www.hackerrank.com/certificates/verify/problem-solving-basic",
      },
    ],
  },
];

export default function Certifications() {
  return (
    <section className="text-white" id="Certifications">
      <div className="pt-24 flex flex-col items-center justify-center w-full px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-blue-500 text-transparent bg-clip-text mb-12 text-center">
          Certifications
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {certificationData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col h-full hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  {group.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {group.institution}
                </h3>
              </div>

              <div className="space-y-4 flex-grow">
                {group.certifications.map((item, certIndex) => (
                  <div 
                    key={certIndex} 
                    className="p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm md:text-base font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs font-mono text-blue-200/50 mt-1">
                        {item.details}
                      </p>
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-blue-400 hover:text-blue-300 transition-colors"
                        aria-label="Verify credential"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

