import React from "react";
import { Github, Linkedin, Mail, Instagram, Dribbble, Chrome } from "lucide-react";

const SocialLink = ({ href, icon, label, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`relative group flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md transition-all duration-300
      hover:bg-white/20 hover:scale-105 hover:shadow-lg ${className}`}
    >
      {icon}
      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-blue-300">
        {label}
      </span>
    </a>
  );
};

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-16 text-white" id="contact">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        {/* Heading centered */}
        <h2 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-secondary text-transparent bg-clip-text mb-6 text-center">
          Contact Me
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* Left side: Text and Email */}
          <div className="flex flex-col items-start justify-center text-left">
            <p className="text-lg md:text-xl sm:text-sm leading-relaxed mb-6 sm:max-w-xs md:max-w-md text-blue-200">
              I’m looking for an internship opportunity to apply my skills in a real-world setting. If you're seeking a dedicated team player for your next project, let's connect!
            </p>

            <p className="text-lg md:text-xl sm:text-sm mb-6">
              <a
                href="mailto:vimalanthushani1122@gmail.com"
                className="inline-block text-blue-300 hover:text-blue-500 transition-colors duration-300 underline underline-offset-4"
              >
                vimalanthushani1122@gmail.com
              </a>
            </p>

            <div className="flex flex-wrap gap-6">
              <SocialLink
                href="https://github.com/Thusaniv"
                icon={<Github className="h-5 w-5 text-white" />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/thusani-vimalenthiran"
                icon={<Linkedin className="h-5 w-5 text-[#0A66C2]" />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:vimalanthushani1122@gmail.com"
                icon={<Mail className="h-5 w-5 text-[#EA4335]" />}
                label="Gmail"
              />
              <SocialLink
                href="https://thusani.vercel.app/"
                icon={<Chrome className="h-5 w-5 text-blue-400" />}
                label="Portfolio"
              />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Contact;
