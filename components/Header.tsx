import React from "react";

import { EnvelopeIcon } from "@heroicons/react/24/solid";
import SocialMediaIcons from "./SocialMediaIcons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="container mx-auto sticky top-0 flex items-center justify-between z-30 h-16">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center justify-center px-3 ml-2 sm:ml-0"
      >
        <div className="flex justify-center md:justify-start gap-4">
        {/* social icons */}
          {socials.map((social) => (
            <SocialMediaIcons
              key={social._id}
              socialDataTitle={social.title}
              socialDataUrl={social.url}
              iconHeight="h-6"
            />
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#contact"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center px-3 mr-2 sm:mr-0"
      >
        <EnvelopeIcon className="cursor-pointer h-6 mr-2" />
        <p className="uppercase hidden md:inline-flex text-sm text-white">
          Me contacter
        </p>
      </motion.a>
    </header>
  );
}
