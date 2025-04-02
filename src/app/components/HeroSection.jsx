"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 py-8 mb-16 h-full">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Hello, I'm Thusani{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg md:text-sm mb-6 lg:text-xl">
            Computer Science student skilled in Web & App Development, UI/UX, and Graphic Design. 
            Passionate about creating innovative and user-friendly solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary to-secondary hover:scale-105 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
           {/* <Link
              href="/Thusani_CV.pdf"
              download="Thusani_CV.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary to-secondary hover:bg-slate-800 hover:scale-105 text-white mt-3 sm:mt-0"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>*/}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-4 place-self-center mt-4 lg:mt-0 flex justify-center sm:justify-end"
        >
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] relative overflow-hidden rounded-full bg-[#181818]">
            <Image
              src="/images/hero-image.jpeg"
              alt="hero image"
              className="absolute lg:mt-14 sm:mt-10 mt-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={400}
              height={400}
              style={{
                objectFit: 'cover', // Ensures the image covers the container without stretching
                clipPath: 'circle(50%)' // Clipping the image to a circle
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
