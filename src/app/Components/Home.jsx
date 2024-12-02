"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Home = () => {
    const textRef = useRef(null);
    const textRef1 = useRef(null);

    useEffect(() => {
        const element = textRef.current;

        gsap.fromTo(
            element,
            { x: -50, opacity: 0 }, // Starting properties
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 1 } // Ending properties
        );
    }, []);

    useEffect(() => {
        const element = textRef1.current;

        gsap.fromTo(
            element,
            { x: 50, opacity: 0 }, // Starting properties
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 1.5 } // Ending properties
        );
    }, []);

    return (
        <div className='hidden md:flex max-w-[1350px] mx-auto relative top-[200px] justify-between pr-[100px] px-[20px]'>
            <div ref={textRef} className='max-w-[300px]'>
                <h2 className='text-[34px] font-semibold uppercase  text-[#472717]'>photography</h2>
                <p className='text-[#03409A] font-semibold text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='pt-[100px] ' ref={textRef1}>
                <ul>
                    <li className='py-[10px] list-decimal text-[18px] font-bold text-[#03409A]'>Fashion Design</li>
                    <li className='py-[10px] list-decimal text-[18px] font-bold text-[#472717]'>Fashion Design</li>
                    <li className='py-[10px] list-decimal text-[18px] font-bold text-[#03409A]'>Fashion Design</li>
                    <li className='py-[10px] list-decimal text-[18px] font-bold text-[#472717]'>Fashion Design</li>
                </ul>
            </div>
        </div>
    )
}

export default Home
