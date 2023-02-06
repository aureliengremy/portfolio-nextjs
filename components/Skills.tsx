import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';


type Props = {}

const Skills = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto items-center"
    >
      <div className="mb-6 mt-24">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mb-5">
          Skills
        </h3>
        <h4 className="uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for currency profieciency.
        </h4>
      </div>
      <div className="grid grid-cols-4 gap-5 my-auto">
        {/* {Skill} */}
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
      </div>
    </motion.div>
  )
}
export default Skills;