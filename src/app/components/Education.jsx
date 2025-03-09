"use client";
import React from "react";

const education = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "PHP", "JavaScript","C#"],
  },
  {
    category: "Web Development",
    items: ["React.js", "Next.js", "Node.js"],
  },
  {
    category: "Database Management",
    items: ["MySQL", "MongoDB"],
  },
];

const Education = () => {
  return (
    <section id="Education" className="text-white py-12 flex flex-col items-center">
      {/* Gradient Heading */}
      <h2 className="text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-secondary text-transparent bg-clip-text mb-6">
        My Skills
      </h2>

      {/* Skills Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {education.map((education, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#3b4b69] to-[#1E1E1E] p-6 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              {education.category}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {education.items.map((item, i) => (
                <li key={i} className="hover:text-white transition duration-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
