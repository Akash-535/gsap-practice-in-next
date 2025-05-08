"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";

const Hero = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".animate-card");

      gsap.set(cards, {
        transformOrigin: "center center",
        perspective: 1000,
        rotationX: -90,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-parent",
          start: "top top",
          end: "800% bottom",
          scrub: 3,
          pin: true,
        },
      });

      tl.to(cards, {
        bottom: "50%",
        translateY: "50%",
        rotationX: 0,
        rotationY: 0,
        scale: 1.1,
        stagger: {
          amount: 3,
          from: "center",
        },
        borderRadius: "50%",
        ease: "back",
        duration: 3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full relative min-h-screen gsap-parent overflow-hidden bg-gradient-to-br from-black via-violet-300 to-gray-900">
      <div className="size-[300px] bg-black absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-h-[300px] z-[1] rounded-[50%]"></div>
      <div className="size-[300px] bg-red-400 absolute -bottom-full left-1/2 -translate-x-1/2 max-h-[300px] z-[2] animate-card"></div>
      <div className="size-[300px] bg-green-400 absolute -bottom-full left-1/2 -translate-x-1/2 max-h-[300px] z-[3] animate-card"></div>
      <div className="size-[300px] bg-blue-400 absolute -bottom-full left-1/2 -translate-x-1/2 max-h-[300px] z-[4] animate-card"></div>
      <div className="size-[300px] bg-pink-500 absolute -bottom-full left-1/2 -translate-x-1/2 max-h-[300px] z-[5] animate-card"></div>
      <div className="size-[300px] bg-violet-400 absolute -bottom-full left-1/2 -translate-x-1/2 max-h-[300px] z-[6] animate-card"></div>
      <div className="size-[300px] bg-purple-400 absolute -bottom-full left-1/2 -translate-x-1/2 max-h-[300px] z-[7] animate-card"></div>
      <div className="size-[300px] bg-orange-400 absolute -bottom-full left-1/2 -translate-x-1/2 max-h-[300px] z-[8] animate-card"></div>
      <div className="size-[300px] bg-yellow-400 absolute -bottom-full left-1/2 -translate-x-1/2 max-h-[300px] z-[9] animate-card"></div>
      <div className="size-[300px] bg-amber-600 absolute -bottom-full left-1/2 -translate-x-1/2 max-h-[300px] z-[10] animate-card"></div>
    </div>
  );
};

export default Hero;
