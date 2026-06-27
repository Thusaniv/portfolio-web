"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import AvatarVideo from "./AvatarVideo";

const HeroSection = () => {
  return (
    <section
      className="relative pt-4 pb-8 sm:pb-12 min-h-[480px] sm:min-h-[560px] lg:min-h-[650px] flex items-center"
      id="home"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center w-full z-10 relative">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-7 place-self-center text-center lg:text-left justify-self-start z-10 px-2 sm:px-0"
        >
          <h1 className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white">
              Hello, I&apos;m Thusani
            </span>
            <br />
            <div className="h-[50px] sm:h-[60px] lg:h-[80px] mt-2 block text-blue-400 glow-text-blue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1500,
                  "AI/ML Researcher",
                  1500,
                  "Full-Stack Developer",
                  1500,
                  "Mobile Developer",
                  1500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Passionate Software Engineer and Deep Learning Researcher. Experienced in developing enterprise full-stack systems, machine learning pipelines, and interactive 3D solutions.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 w-full xs:w-fit rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 active:scale-95 text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] text-center text-sm sm:text-base"
            >
              Get In Touch
            </Link>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 w-full xs:w-fit rounded-xl font-bold glass-panel hover:bg-white/10 hover:border-blue-400/50 hover:scale-105 active:scale-95 text-white transition-all duration-300 text-center border border-white/10 flex items-center justify-center text-sm sm:text-base"
            >
              View My Work
            </a>
          </div>
        </motion.div>

        {/* Avatar Video — hidden on very small screens, shown from sm up */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 lg:col-span-5 w-full flex justify-center z-10 
                     hidden sm:flex
                     lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[55%] lg:justify-end lg:items-center pointer-events-none"
        >
          <div className="w-full h-[280px] sm:h-[380px] lg:h-full pointer-events-auto flex justify-center lg:justify-end items-center">
            <AvatarVideo />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
