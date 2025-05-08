"use client";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import React, { useEffect } from "react";
gsap.registerPlugin(Draggable, InertiaPlugin);

const GsapComponent = () => {
  useEffect(() => {
    gsap.to(".to-box", {
      xPercent: -300,
      duration: 2,
      repeat: -1,
      ease: "bounce",
      borderRadius: "50%",
    });

    gsap.from(".from-box", {
      xPercent: -300,
      duration: 2,
      repeat: -1,
      ease: "bounce",
      borderRadius: "50%",
    });

    gsap.fromTo(
      ".from-to-box",
      {
        xPercent: -200,
        backgroundColor: "pink",
      },
      {
        xPercent: 200,
        backgroundColor: "yellow",
        duration: 2,
        repeat: -1,
        yoyo: true,
        borderRadius: "50%",
        ease: "back",
        color: "black",
      }
    );

    gsap.set(".set-box", {
      xPercent: 50,
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-green-300 flex flex-col gap-10 justify-center items-center py-20 section overflow-hidden">
      {/* <div className="size-40 flex justify-center items-center text-xl font-bold text-white bg-red-500 h-40 to-box">
        gsap.to()
      </div>
      <div className="size-40 flex justify-center items-center text-xl font-bold text-white bg-blue-500 h-40 from-box">
        gsap.from()
      </div>
      <div className="size-40 flex justify-center items-center text-xl font-bold text-white h-40 from-to-box">
        gsap.fromTo()
      </div>
      <div className="size-40 flex justify-center items-center text-xl font-bold text-white bg-yellow-500 h-40 set-box">
        gsap.set()
      </div> */}
    </div>
  );
};
export default GsapComponent;
