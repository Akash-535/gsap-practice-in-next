"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";

const GsapSwiper = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const tl = gsap.timeline();
      mm.add("(min-width:1024px)", () => {
        ScrollTrigger.create({
          trigger: ".swiper-parent",
          start: "top , top",
          end: "500% , bottom",
          scrub: 5,
          pin: true,
          animation: tl,
        });

        tl.fromTo(
          ".swiper-div",
          {
            x: "50%",
            duration: 4,
            stagger: 2,
          },
          {
            x: "-160%",
            duration: 4,
            stagger: 2,
          }
        );
      });
      mm.add("(min-width:675px) and (max-width:1023.98px)", () => {
        ScrollTrigger.create({
          trigger: ".swiper-parent",
          start: "top , top",
          end: "500% , bottom",
          scrub: 2,
          pin: true,
          animation: tl,
        });

        tl.fromTo(
          ".swiper-div",
          {
            x: "50%",
            duration: 2,
          },
          {
            x: "-125%",
            duration: 2,
          }
        );
      });
      mm.add("(min-width:14px) and (max-width:675.98px)", () => {
        ScrollTrigger.create({
          trigger: ".swiper-parent",
          start: "top , top",
          end: "500% , bottom",
          scrub: 2,
          pin: true,
          animation: tl,
        });

        tl.fromTo(
          ".swiper-div",
          {
            x: "42%",
            duration: 2,
          },
          {
            x: "-87%",
            duration: 2,
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full min-h-screen py-10 flex justify-center items-center overflow-hidden swiper-parent flex-col gap-10">
      <h2 className="text-5xl font-bold text-green-500 text-center">
        Gsap Swiper
      </h2>
      <div className="flex items-center w-full min-w-[1920px] justify-start gap-10 max-w-[1920px] swiper-div">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="min-w-96 h-96 bg-green-500 flex items-center justify-center max-lg:min-w-80 max-lg:h-80 max-md:min-w-60 max-md:h-60 max-md:gap-7"
          >
            <p className="text-2xl font-bold text-center  text-red-500">
              {i + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GsapSwiper;
