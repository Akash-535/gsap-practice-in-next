"use client";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import React, { useEffect } from "react";
gsap.registerPlugin(Draggable, InertiaPlugin);

const ThreeD = () => {
  useEffect(() => {
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
    <div className="min-h-screen flex items-center py-10 section bg-black overflow-hidden flex-col gap-20">
      <h2 className="text-4xl text-white text-center font-bold">3D CUBE</h2>
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

export default ThreeD;
