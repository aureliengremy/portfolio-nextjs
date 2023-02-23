import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import Image from "next/image";
import { urlFor } from "../sanity";
// import {fetchSkills} from '../utils/fetchSkills'

type Props = {
  directionLeft: boolean;
  skill: Skill
};

const Ability = ({ directionLeft, skill }: Props) => {
  // fetchSkills()
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image src={skill?.image.toString()} alt={skill.title} width={64} height={64}/>
      </motion.div>
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-md font-bold text-black opacity-100">{skill.title}</p>
            </div>
        </div>
    </div>
  );
};
export default Ability;
