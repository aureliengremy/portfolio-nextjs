import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo
};

export default function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo.name}!`,
      "Developpeur Front-end",
      "Developpeur FullStack",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-center overflow-hidden text-white z-20">
      <div className="flex flex-col items-center justify-center mt-[25vh]">
      <BackgroundCircles />

      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        className="rounded-full h-fit w-fit -mt-14 mx-auto object-cover"
        width={128}
        height={128}
        alt="Photo de moi"
      />

      <div className="mt-6 w-screen">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          Developpeur Front-end
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold px-10 my-2">
          <span>{text}</span>
          <Cursor cursorColor="#ffa700" />
        </h1>
      </div>
      <div className="z-10 flex flex-col md:flex-row justify-center mt-2">
        <Link href="#about">
          <div className="heroBtn">À propos</div>
        </Link>
        <Link href="#experience">
          <div className="heroBtn">Experiences</div>
        </Link>
        <Link href="#skills">
          <div className="heroBtn">Compétences</div>
        </Link>
        <Link href="#projects">
          <div className="heroBtn">Projets</div>
        </Link>
        <Link href="#contact">
          <div className="heroBtn">Contact</div>
        </Link>
      </div>
      </div>

      {/* </div> */}
    </div>
  );
}
