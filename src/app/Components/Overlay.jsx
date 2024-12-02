"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';
import Home from './Home';


const Overlay = () => {
    const overlayRef = useRef(null);

    useEffect(() => {
        const divs = overlayRef.current.children;

        gsap.to(divs, {
            y: -750, // Move up by 100px
            duration: 0.5, // Animation duration for each div
            stagger: 0.5, // 0.5 seconds delay between each div's animation
            ease: "power2.out", // Easing function for a smooth effect
        });
    }, []);
    return (
        <div className='relative'>
            <div ref={overlayRef} className="w-[100%] h-[100vh] flex overflow-hidden ">
                <div className='bg-[#F5C096] w-[50%]'></div>
                <div className='bg-[#03409A] w-[50%]'></div>
            </div>
            <div className='absolute top-0 left-0 right-0 -z-10 h-[100vh] bg'>
                <Navbar />
                <Home/>
            </div>
        </div>
    )
}

export default Overlay
