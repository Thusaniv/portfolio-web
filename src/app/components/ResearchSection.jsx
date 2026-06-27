"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, GraduationCap } from "lucide-react";

const publications = [
  {
    title: "DeFungi: Image Classification with Image Enhancement and Feature Fusion",
    conference: "6th International Conference on Advanced Research in Computing (ICARC 2026)",
    description: "Proposed a robust approach for fungal image classification by integrating image enhancement and feature fusion techniques to solve high-similarity classification challenges.",
    technologies: ["Python", "PyTorch", "Deep Learning", "OpenCV", "Google Colab"],
    link: "https://ieeexplore.ieee.org/document/11453592",
  },
  {
    title: "Automated Fungi Classification with VGG16-Based Feature Fusion and Contrast Enhancement",
    conference: "Sri Lanka Student Workshop on Computer Science (SL-SWCS'25)",
    description: "Developed an automated classification workflow by combining contrast enhancement preprocessing techniques with multi-stage feature extraction via a fine-tuned VGG16 architecture.",
    technologies: ["Python", "PyTorch", "Deep Learning", "OpenCV", "Google Colab"],
    link: null,
  },
];

export default function ResearchSection() {
  return (
    <section className="text-white mt-16 mb-16 px-6 md:px-12" id="research">
      <div className="pt-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-blue-500 text-transparent bg-clip-text mb-4 text-center">
          Research & Publications
        </h2>
        <p className="text-blue-200/60 max-w-2xl text-center mb-12 text-sm sm:text-base">
          Academic publications and research contributions in Artificial Intelligence, Computer Vision, and Deep Learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel-interactive p-6 md:p-8 rounded-2xl flex flex-col justify-between border border-white/5 h-full relative overflow-hidden group"
            >
              {/* Subtle top background glow */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-blue-300 font-bold bg-blue-950/80 px-3 py-1 rounded-full border border-blue-500/20">
                    Conference Paper
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors duration-300">
                  {pub.title}
                </h3>
                
                <p className="text-sm font-semibold text-blue-400 mb-4 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 flex-shrink-0" />
                  <span>{pub.conference}</span>
                </p>

                <p className="text-sm text-blue-100/70 mb-6 leading-relaxed text-justify">
                  {pub.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    <span>Read Paper on IEEE Xplore</span>
                    <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-white/40 italic">
                    Proceedings Archive In Press
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
