"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#Skills" },
  { title: "Research", path: "#research" },
  { title: "Projects", path: "#projects" },
  { title: "Education", path: "#Education" },
  { title: "Certifications", path: "#Certifications" },
  { title: "Design", path: "#design" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentActive = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentActive = `#${section.id}`;
        }
      });
      setActiveLink(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setNavbarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md">
      <div className="flex container lg:py-3 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" passHref>
          <Image
            src="/images/lodo.png"
            alt="THUSANI Logo"
            width={180}
            height={60}
            className="object-contain w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] lg:w-[180px] lg:h-[60px]"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block" id="navbar">
          <ul className="flex md:flex-row md:space-x-1 lg:space-x-2 xl:space-x-6 mt-0 flex-wrap">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  active={activeLink === link.path}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {navbarOpen && (
        <div className="md:hidden bg-[#121212]/98 border-t border-[#33353F]">
          <ul className="flex flex-col py-2">
            {navLinks.map((link, index) => (
              <li key={index} className="border-b border-[#33353F]/50 last:border-b-0">
                <a
                  href={link.path}
                  onClick={() => setNavbarOpen(false)}
                  className={`block px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeLink === link.path
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
