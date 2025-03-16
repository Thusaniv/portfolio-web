"use client";

import { Calendar, ExternalLink } from "lucide-react";
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
      <div className="mt-4 pt-16 md:mt-0 flex flex-col h-full items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-secondary text-transparent bg-clip-text mb-6">
            Certifications
          </h2>

          <div className="flex flex-wrap justify-between gap-8 max-w-6xl w-full">
            {certificationData.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex-1 mb-12`} // Ensure equal height
              >
                <div className="bg-[#3b4b69]/40 backdrop-blur-sm rounded-lg p-6 border border-blue-400/10 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Calendar className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div className="w-full text-left">
                      <h3 className="text-xl font-semibold text-white mb-2">{group.institution}</h3>

                      <div className="text-blue-300/60 text-lg">
                        {group.certifications.map((item, certIndex) => (
                          <div key={certIndex} className="mb-2">
                            <p className="text-white">
                              • {item.title}
                              {item.credentialID && (
                                <span className="text-blue-300/80 text-sm ml-2">
                                  (Credential ID: {item.credentialID})
                                </span>
                              )}
                            </p>
                            {item.link && (
                              <div className="flex items-center text-blue-300/60 text-sm mt-2">
                                <a
                                  href={item.link}
                                  target="_blank"
                                  className="flex items-center gap-2 text-blue-400 hover:text-blue-600"
                                >
                                  View Credential
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
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
