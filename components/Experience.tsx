import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const Experience = ({}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
        
    </motion.div>
  )
}

export default Experience