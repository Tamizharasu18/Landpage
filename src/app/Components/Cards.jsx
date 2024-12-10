"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import Image from "next/image";

export default function Cards() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        const timeln = gsap.timeline({
            scrollTrigger: {
                trigger: ".cards",
                pin: true,
                pinSpacing: true,
                start: "top 10%", // Changed start for better control
                end: "+=2000", // Total scroll distance
                scrub: 1,
            },
        });

        timeln.addLabel("card1");
        timeln.to(".card-1", {
            xPercent: 0,
            opacity: 1,
        });

        timeln.from(".card-2", {
            xPercent: 75,
            opacity: 0,
        });
        timeln.addLabel("card2");

        timeln.to(
            ".card-1",
            {
                scale: 0.95,
                xPercent: -0.5,
                opacity: 0.5,
            },
            "-=0.3"
        );

        timeln.to(".card-2", {
            xPercent: 0,
            opacity: 1,
        });

        timeln.from(".card-3", {
            xPercent: 75,
            opacity: 0,
        });
        timeln.addLabel("card3");

        timeln.to(
            ".card-2",
            {
                scale: 0.98,
                xPercent: -0.4,
                opacity: 0.6,
            },
            "-=0.3"
        );

        timeln.to(".card-3", {
            xPercent: 0,
            opacity: 1,
        });
    }, []);

    return (
        <div className="relative cards max-w-[90%] mx-auto h-[100vh] overflow-hidden">
            {/* Card 1 */}
            <div className="card absolute w-[90%] h-[70vh] flex justify-center items-center rounded-md bg-pink-500 card-1 ">
            <div className="flex  p-[20px] rounded-3xl w-full">
                        <div className="w-[60%] px-[70px] relative pt-[40px]">
                            <h2 className="text-[55px] text-black">
                                Everything you Need in One Place
                            </h2>
                            <p className="text-[22px] leading-[34px] font-normal text-black absolute bottom-[40px] max-w-[600px]">
                                Enjoy spacious community living at The Base: 20 rooms, co-working, yoga, pools, and spa, all at a fraction of home rental costs.
                            </p>
                        </div>
                        <div className="w-[40%] flex justify-end">
                            <Image
                                src="/ibizaFeatureCar3.webp"
                                width={600}
                                height={400}
                                alt=""
                                className="w-[500px] h-[500px] object-cover rounded-3xl"
                            />
                        </div>
                    </div>
            </div>
            {/* Card 2 */}
            <div className="card absolute w-[90%] h-[70vh] flex justify-center items-center rounded-md bg-green-500 card-2 ml-[60px] mt-[50px]">
            <div className="flex  p-[20px] rounded-3xl w-full">
                        <div className="w-[40%] flex justify-end">
                            <Image
                                src="/ibizaFeatureCar2.webp"
                                width={600}
                                height={400}
                                alt=""
                                className="w-[500px] h-[500px] object-cover rounded-3xl"
                            />
                        </div>
                        <div className="w-[60%] px-[70px] relative pt-[40px]">
                            <h2 className="text-[55px] text-black">
                                Everything you Need in One Place
                            </h2>
                            <p className="text-[22px] leading-[34px] font-normal text-black absolute bottom-[40px] max-w-[600px]">
                                Enjoy spacious community living at The Base: 20 rooms, co-working, yoga, pools, and spa, all at a fraction of home rental costs.
                            </p>
                        </div>
                    </div>
            </div>
            {/* Card 3 */}
            <div className="card absolute w-[90%] h-[70vh] flex justify-center items-center rounded-md bg-blue-500 card-3 ml-[120px] mt-[100px]">
            <div className="flex  p-[20px] rounded-3xl w-full">
                        <div className="w-[60%] px-[70px] relative pt-[40px]">
                            <h2 className="text-[55px] text-black">
                                Everything you Need in One Place
                            </h2>
                            <p className="text-[22px] leading-[34px] font-normal text-black absolute bottom-[40px] max-w-[600px]">
                                Enjoy spacious community living at The Base: 20 rooms, co-working, yoga, pools, and spa, all at a fraction of home rental costs.
                            </p>
                        </div>
                        <div className="w-[40%] flex justify-end">
                            <Image
                                src="/ibizaFeatureCar1.webp"
                                width={600}
                                height={400}
                                alt=""
                                className="w-[500px] h-[500px] object-cover rounded-3xl"
                            />
                        </div>
                    </div>
            </div>
        </div>
    );
}
