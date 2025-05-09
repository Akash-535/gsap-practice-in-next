"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger);

const TextAnimation = () => {
  const splitTwoRef = useRef(null);

  useEffect(() => {
    // Animation One
    // ease: "elastic(1.2, 0.5)", for later
    SplitText.create(".split", {
      type: "words, chars",
      onSplit(self) {
        gsap.from(self.chars, {
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
          ease: "back",
        });
      },
    });

    // Heading Animation

    gsap.fromTo(
      ".simple-heading",
      {
        xPercent: -50,
        duration: 1,
        stagger: 1,
        ease: "back",
      },
      {
        xPercent: 0,
        duration: 1,
        stagger: 1,
        ease: "back",
      }
    );

    const splitTwoInstance = SplitText.create(splitTwoRef.current, {
      type: "words, chars",
    });

    //   Animation Two

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        start: "top , top",
        end: "500% , bottom",
        scrub: 3,
        pin: true,
      },
    });

    tl.fromTo(
      splitTwoInstance.chars,
      {
        opacity: "0",
        duration: 1,
        stagger: 1,
      },
      {
        opacity: "1",
        duration: 1,
        stagger: 1,
      }
    ).fromTo(
      splitTwoInstance.chars,
      {
        color: "white",
        duration: 1,
        stagger: 1.5,
      },
      {
        color: "red",
        duration: 1,
        stagger: 1.5,
      }
    );
  }, []);

  return (
    <div className="py-10 bg-black min-h-screen text-white parent flex flex-col justify-center items-center w-full px-4">
      <div className="max-w-[950px] mx-auto w-full overflow-hidden flex flex-col gap-10">
        <div className="w-full">
          <p className="font-bold pb-4 text-2xl simple-heading">
            TEXT ANIMATION ONE
          </p>
          <p className="split">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            iste harum veniam nam delectus dignissimos voluptatibus minus
            suscipit nihil? Quos?
          </p>
        </div>
        <div className="w-full">
          <p className="font-bold pb-4 text-2xl simple-heading">
            TEXT ANIMATION TWO
          </p>
          <p className="split-two" ref={splitTwoRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            eaque delectus, dolores voluptas quis architecto quibusdam fuga
            voluptatem, qui ex voluptatibus illo dolore dolor dolorem assumenda
            odio modi? Labore, non?
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
