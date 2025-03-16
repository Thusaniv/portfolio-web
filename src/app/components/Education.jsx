"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2021",
    degree: "Reading Bachelor of Science Honours degree in Computer Science",
    institution: "University of Jaffna, Sri Lanka",
    duration: "Effective from August 2020"
  },
  {
    year: "2019",
    degree: "G.C.E. Advanced Level (Mathematics Stream)",
    institution: "T/ Sri Shanmuga Hindu Ladies College, Sri Lanka",
    duration: "2017—2019",
    score: "Z-Score – 1.1251"
  }
];

export default function Education() {
  return (
    <section className="text-white" id="Education">
    <div className="mt-4 pt-16 md:mt-0 flex flex-col h-full items-center justify-center">
  <div className="max-w-5xl mx-auto px-4 py-16 text-center">
    <h2 className="text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-secondary text-transparent bg-clip-text mb-6">
      Educational
    </h2>
        <div className="relative">

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-12 ml-8"
            >
              <div className="bg-[#3b4b69]/40 backdrop-blur-sm rounded-lg p-6 ml-6 border border-blue-400/10 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-shadow">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.degree}</h3>
                    <div className="flex items-center mb-3 text-blue-300/60 text-lg">
                      <span> {item.institution}</span>
                    </div>
                    <div className="flex items-center text-blue-300/60 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{item.duration}</span>
                    </div>
                    {item.score && (
                      <p className=" mt-2 text-blue-300/80 text-sm">{item.score}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
