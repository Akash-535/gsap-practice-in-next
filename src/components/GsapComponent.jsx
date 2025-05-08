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

    // gsap.to(".drag-box", {
    //   rotationX: 360,
    //   rotationY: 360,
    //   rotationZ: 360,
    //   duration: 15,
    //   repeat: -1,
    // });

    Draggable.create(".drag-box", {
      type: "x , y ",
      edgeResistance: 3,
      bounds: ".section",
      inertia: true,

      onDrag: function () {
        let rotateX = this.y;
        let rotateY = this.x;
        gsap.to(".drag-box", {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: 0.1,
        });
      },
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

      <div
        className="relative size-[150px] drag-box transform-3d rotate-y-45 rotate-x-45"
        style={{ transformOrigin: "center center" }}
      >
        <div className="front-side absolute z-10 size-[150px] flex justify-center items-center text-xl font-bold text-white border border-black translate-z-[75px] bg-red-500/70">
          gsap drag
        </div>
        <div className="back-side absolute z-10 size-[150px] flex justify-center items-center text-xl font-bold text-white border border-black -translate-z-[75px] rotate-y-180 bg-green-600/70">
          gsap drag
        </div>
        <div className="right-side absolute z-10 size-[150px] flex justify-center items-center text-xl font-bold text-white border border-black translate-x-[75px] rotate-y-90 bg-black/70">
          gsap drag
        </div>
        <div className="left-side absolute z-10 size-[150px] flex justify-center items-center text-xl font-bold text-white border border-black -translate-x-[75px] rotate-y-90 bg-blue-500/70">
          gsap drag
        </div>
        <div className="top-side absolute z-10 size-[150px] flex justify-center items-center text-xl font-bold text-white border border-black -translate-y-[75px] rotate-x-90 bg-amber-400/60">
          gsap drag
        </div>
        <div className="bottom-side absolute z-10 size-[150px] flex justify-center items-center text-xl font-bold text-white border border-black translate-y-[75px] rotate-x-90 bg-orange-500/70">
          gsap drag
        </div>
      </div>
    </div>
  );
};
export default GsapComponent;
