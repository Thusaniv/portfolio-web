import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  default: { width: 0 }, // No underline when not active
  active: { width: "100%" }, // Full underline when active
  hover: { width: "100%", left: "0" }, // Full underline on hover
};

const NavLink = ({ href, title, active }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative inline-block">
      <Link
        href={href}
        onClick={handleClick} // Handle smooth scroll
        className={`block py-2 pl-1 pr-1 text-[#ADB7BE] sm:text-sm sm:font-bold sm:bg-[#121212] lg:bg-transparent md:bg-transparent rounded-xl md:text-sm lg:text-lg font-bold hover:text-white hover:scale-105 cursor-pointer transition-transform duration-200 ${
          active ? "text-white" : "text-[#ADB7BE]"
        }`}
      >
        {title}
      </Link>
      {/* Underline animation */}
      <motion.div
        animate={active ? "active" : "default"} // Animate based on active state
        whileHover="hover" // Animate on hover
        variants={variants}
        transition={{ type: "spring", stiffness: 300 }} // Adjust animation smoothness
        className="absolute bottom-0 left-0 h-1 bg-primary rounded-xl"
      ></motion.div>
    </div>
  );
};

export default NavLink;
