"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ImageReavelAnimation = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(".white-layer", {
      width: "0%",
      duration: 2,
      delay: 0.7,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "15% bottom",
        toggleActions: "play none none reset",
      },
      stagger: 0.4,
    });
  }, []);
  return (
    <>
      <div
        ref={sectionRef}
        className="min-h-screen flex justify-center items-center bg-red-500/50 section flex-col py-10 gap-10 overflow-hidden"
      >
        <h2 className="text-white font-bold text-4xl text-center uppercase">
          Image Reavel Animation
        </h2>
        <div className="flex items-center gap-6 w-full max-w-[1140px] mx-auto px-4 flex-wrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="w-full max-w-[500px] h-[500px] relative">
              <span className="block w-full h-full bg-white absolute top-0 right-0 white-layer"></span>
              <div className="w-full h-[500px] bg-black flex justify-center items-center">
                <p className="text-3xl text-white font-bold">Image</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageReavelAnimation;
