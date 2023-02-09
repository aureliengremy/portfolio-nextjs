import React from "react";

import { EnvelopeIcon } from "@heroicons/react/24/solid";
import SocialMediaIcons from "./SocialMediaIcons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-center justify-between z-30 h-16">
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
        className="flex flex-row items-center justify-center px-3"
      >
        {/* social icons */}
        <SocialMediaIcons iconHeight="h-6" />
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
          className="flex flex-row items-center px-3"
        >
          <EnvelopeIcon
            className="cursor-pointer h-6 mr-2"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-white">
            Get in touch
          </p>
        </motion.a>

     
    </header>
  );
}
