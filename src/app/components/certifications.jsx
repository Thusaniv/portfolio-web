"use client";

import { BadgeCheck, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const certificationData = [
  {
    institution: "Centre for Open & Distance Learning (CODL) UoM",
    certifications: [
      {
        title: "Python for Beginners",
        credentialID: "YnFBpLhrCQ",
        year: 2025,
      },
      {
        title: "Foundations of Project Management",
        credentialID: "Q2981tsyaX",
        year: 2025,
      },
    ],
  },
  {
    institution: "Hacker Rank",
    certifications: [
      {
        title: "JavaScript (Basic)",
        link: "https://www.hackerrank.com/certificates/credential1",
      },
      {
        title: "JavaScript (Intermediate)",
        link: "https://www.hackerrank.com/certificates/credential2",
      },
      {
        title: "C# (Basic)",
        link: "https://www.hackerrank.com/certificates/credential3",
      },
      {
        title: "Problem Solving (Basic)",
        link: "https://www.hackerrank.com/certificates/credential4",
      },
    ],
  },
];

export default function Certifications() {
  return (
    <section className="text-white" id="Certifications">
      <div className="mt-4 pt-12 md:pt-16 flex flex-col items-center justify-center w-full">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-secondary text-transparent bg-clip-text mb-6">
            Certifications
          </h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
            {certificationData.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-1 min-h-[200px]"
              >
                <div className="bg-[#3b4b69]/40 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-blue-400/10 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-shadow h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <BadgeCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0" />
                      <div className="w-full text-left">
                        <h3 className="text-sm md:text-xl font-semibold text-white mb-1 md:mb-2">
                          {group.institution}
                        </h3>

                        <div className="text-blue-300/60 text-sm md:text-base">
                          {group.certifications.map((item, certIndex) => (
                            <div key={certIndex} className="mb-2 flex flex-wrap items-center gap-2">
                              <p className="text-white">
                                • {item.title}
                              </p>
                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  className="flex items-center gap-1 text-blue-400 hover:text-blue-600 text-xs md:text-sm"
                                >
                                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
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
