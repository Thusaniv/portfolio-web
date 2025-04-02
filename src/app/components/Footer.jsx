import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-5 flex justify-between">
         <Image
                  src="/images/lodo.png"
                  alt="THUSANI Logo"
                  width={180}
                  height={30}
                  className="object-contain items-center justify-between w-[100px] h-[30px] lg:w-[150px] lg:h-[50px] relative"
                />
        <p className="text-slate-600 sm:text-sm">© 2025 Thusani Vimalenthiran. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
