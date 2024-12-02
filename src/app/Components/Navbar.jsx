"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
    const navbarRef = useRef(null);

    useEffect(() => {
        const navbar = navbarRef.current;

        // GSAP Animation: Top-to-bottom slide-in
        gsap.from(navbar, {
            y: -100, // Start above the viewport
            opacity: 0, // Start with 0 opacity
            duration: 1, // Animation duration (in seconds)
            ease: 'power2.out',
            delay: 0.5,
        });
    }, []);

    return (
        <div ref={navbarRef} className="px-[60px]">
            <div className="flex items-center justify-between py-[25px]">
                <div>
                    <h1 className="uppercase text-[#03409A] text-[24px] font-bold font-serif tracking-wider">Dezvolta</h1>
                </div>
                <div>
                    <ul className="flex items-center">
                        <li className="px-[30px] cursor-pointer text-[18px] font-mono text-[#472717] ">Home</li>
                        <li className="px-[30px] cursor-pointer text-[18px] font-mono  text-[#472717]">Modeling</li>
                        <li className="px-[30px] cursor-pointer text-[18px] font-mono  text-[#472717]">Fashion</li>
                        <li className="px-[30px] cursor-pointer text-[18px] font-mono  text-[#472717]">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
