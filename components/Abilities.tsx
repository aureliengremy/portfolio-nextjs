import React from 'react'
import { motion } from "framer-motion";
import Ability from './Ability';
import { Skill } from '@/typings';


type Props = {
  skills: Skill[]
}

const Abilities = ({skills}: Props) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-evenly relative md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto items-center"
    >
      <div className="mb-6 mt-24">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mb-5">
          Compétences
        </h3>
        {/* <h4 className="uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for currency profieciency.
        </h4> */}
      </div>
      <div className="grid grid-cols-4 gap-12 my-auto">
        {/* {Skill} */}
        {skills?.slice(0, skills.length / 2).map((skill,index) => (
          <Ability key={skill._id} skill={skill} directionLeft={true}/>          
        ))}
        {skills?.slice(skills.length /2, skills.length).map((skill,index) => (
          <Ability key={skill._id} skill={skill} directionLeft={false}/>          
        ))}
      </div>
    </motion.div>
  )
}
export default Abilities;