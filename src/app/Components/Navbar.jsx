// "use client"
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Navbar = () => {
//     const navbarRef = useRef(null);

//     useEffect(() => {
//         const navbar = navbarRef.current;

//         // GSAP Animation: Top-to-bottom slide-in
//         gsap.from(navbar, {
//             y: -100, // Start above the viewport
//             opacity: 0, // Start with 0 opacity
//             duration: 1, // Animation duration (in seconds)
//             ease: 'power2.out',
//             delay: 0.5,
//         });
//     }, []);

//     return (
//         <div ref={navbarRef} className="px-[60px]">
//             <div className="flex items-center justify-between py-[25px]">
//                 <div>
//                     <h1 className="uppercase text-[#03409A] text-[24px] font-bold font-serif tracking-wider">Dezvolta</h1>
//                 </div>
//                 <div>
//                     <ul className="flex items-center">
//                         <li className="px-[30px] cursor-pointer text-[18px] font-mono text-[#472717] ">Home</li>
//                         <li className="px-[30px] cursor-pointer text-[18px] font-mono  text-[#472717]">Modeling</li>
//                         <li className="px-[30px] cursor-pointer text-[18px] font-mono  text-[#472717]">Fashion</li>
//                         <li className="px-[30px] cursor-pointer text-[18px] font-mono  text-[#472717]">Contact</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = navbarRef.current;

    // GSAP Animation: Top-to-bottom slide-in
    gsap.from(navbar, {
      y: -100, // Start above the viewport
      opacity: 0, // Start with 0 opacity
      duration: 1, // Animation duration (in seconds)
      ease: "power2.out",
      delay: 0.5,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle menu open/close state
  };

  return (
    <div ref={navbarRef} className="px-6 md:px-[60px]">
      <div className="flex items-center justify-between py-[25px]">
        {/* Logo */}
        <h1 className="uppercase text-[#03409A] text-[24px] font-bold font-serif tracking-wider">
          Dezvolta
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center">
          <li className="px-[30px] cursor-pointer text-[18px] font-mono text-[#472717]">
            Home
          </li>
          <li className="px-[30px] cursor-pointer text-[18px] font-mono text-[#472717]">
            Modeling
          </li>
          <li className="px-[30px] cursor-pointer text-[18px] font-mono text-[#472717]">
            Fashion
          </li>
          <li className="px-[30px] cursor-pointer text-[18px] font-mono text-[#472717]">
            Contact
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#472717] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            // Close Icon (SVG)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon (SVG)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden flex flex-col space-y-4 mt-4 bg-[#F8F8F8] rounded-lg p-6`}
      >
        <a
          href="#home"
          className="text-[18px] font-mono text-[#472717] hover:underline"
        >
          Home
        </a>
        <a
          href="#modeling"
          className="text-[18px] font-mono text-[#472717] hover:underline"
        >
          Modeling
        </a>
        <a
          href="#fashion"
          className="text-[18px] font-mono text-[#472717] hover:underline"
        >
          Fashion
        </a>
        <a
          href="#contact"
          className="text-[18px] font-mono text-[#472717] hover:underline"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
