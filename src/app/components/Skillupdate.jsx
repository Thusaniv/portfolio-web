"use client";
import React from "react";

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "PHP",
  ],
  backend: ["Node.js", "Laravel", "Express", "REST API", "JWT/OAuth"],
  databases: ["MySQL", "MongoDB", "PostgreSQL"],
  tools: ["Git", "GitHub", "MATLAB", "Visual Studio", "Vercel"],
  design: ["Adobe Photoshop", "Figma"],
};

export default function Skillupdate() {
  return (
    <div className="flex flex-col items-center justify-center text-white p-8">
      <h2 className="text-3xl font-bold mb-6">MY SKILLS</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3 uppercase">{category}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skillList.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm border border-blue-500 bg-blue-900/50 rounded-md hover:bg-blue-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
