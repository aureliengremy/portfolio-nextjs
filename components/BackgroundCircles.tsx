import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ scale: [1, 2, 2, 3, 1],
    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], borderRadius: ["20%", "20%", "40%", "80%", "100%"] }}
      transition={{ duration: 2.5}}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-orange-300 rounded-full h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] animate-ping"></div>
      {/* <div className="absolute border border-orange-300 rounded-full h-[300px] w-[300px]"></div> */}
      <div className="absolute border border-orange-300 rounded-full h-[520px] w-[520px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px] animate-pulse"></div>
    </motion.div>
  );
}
