"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-16 mb-16 px-6 md:px-12" id="about">
      <div className="mt-4 pt-32 md:mt-0 text-left flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-secondary text-transparent bg-clip-text mb-6 text-center">
          About Me
        </h2>
        
        <div className="bg-gradient-to-r from-[#3b4b69] to-[#1E1E1E] p-6 md:p-8 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105 max-w-5xl w-full">
          <p className="text-base sm:text-sm lg:text-lg mb-4 text-justify">
            I’m a Computer Science undergraduate passionate about full-stack development, leadership, 
            and Deep Learning. I enjoy building efficient, user-friendly solutions that solve real-world problems 
            while continuously expanding my skills. I am always eager to learn, adapt, and grow, striving to stay 
            at the forefront of technology and contribute to impactful solutions in computing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
