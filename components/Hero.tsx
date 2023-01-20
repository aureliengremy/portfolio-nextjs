import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Aurelien!",
      "Developper Front-end",
      "Developper FullStack",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    

    <div className="h-screen relative flex flex-col items-center justify-center text-center overflow-hidden text-white z-0">
      <BackgroundCircles />
      <Image
        src="/images/Me_Day-34-crop.png"
        className="rounded-full h-fit w-fit -mt-14 mx-auto object-cover"
        width={128}
        height={128}
        alt="Photo de moi"
      />
      <div className="mt-6">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
            Developpeur Front-end
        </h2>
        <h1 className="text-5xl lg:text6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#ffa700" />
        </h1>
      </div>
      {/* <div className=""> */}
        <div className="z-10 flex flex-row justify-center">
            <div className="heroBtn">About</div>
            <div className="heroBtn">Experience</div>
            <div className="heroBtn">Skills</div>
            <div className="heroBtn">Contact</div>
        </div>

      {/* </div> */}
    </div>

  );
}