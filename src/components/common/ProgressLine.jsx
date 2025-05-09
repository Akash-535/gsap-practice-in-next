"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProgressLine = () => {
  const progressTextRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = Math.round(self.progress * 100);

        gsap.to(".progress-line", {
          width: `${progress}%`,
          duration: 2,
          ease: "power1.out",
        });

        if (progressTextRef.current) {
          progressTextRef.current.textContent = `${progress}%`;
        }
      },
    });
  }, []);

  return (
    <>
      <div className="w-full h-2 bg-gray-400 fixed top-2 left-0 z-10 flex items-center px-4">
        <div className="absolute left-0 top-0 h-2 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-400 progress-line w-0"></div>
      </div>
      <div
        ref={progressTextRef}
        className="fixed  text-lg font-bold z-20 ml-auto bottom-4 right-4 size-14 border-black border-2 rounded-full bg-white flex justify-center items-center"
      >
        0%
      </div>
    </>
  );
};

export default ProgressLine;
