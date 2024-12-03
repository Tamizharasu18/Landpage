"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Bgimage = () => {

    const bgImageRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(
                bgImageRef.current,
                {
                    clipPath: "circle(5% at 77% 40%)",
                },
                {
                    clipPath: "circle(75% at 50% 50%)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: bgImageRef.current,
                        scrub: 1,
                        start: "top center",
                        end: "top center-=200",
                    },
                }
            );
        }
    }, []);

    return (
        <div>
            <div className='img-container' ref={bgImageRef}></div>
            <div className='h-[50vh] bg-white'></div>
        </div>
    )
}

export default Bgimage
