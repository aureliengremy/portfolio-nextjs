import React from "react";
import { motion } from "framer-motion";

type Props = {}

const About = ({}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col text-center px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex flex-col md:text-left md:flex-row">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          src="/images/Me_smilng-black.png"
          className="mb-5 mx-auto md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
        />
        <motion.div className="space-y-10 px-0 md:px-10 xl:m-auto">
          <h4 className="text-semibold text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h4>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            debitis aspernatur culpa! Eius nihil, accusantium eligendi tenetur
            doloribus magni! Nobis illo tenetur alias esse, assumenda at
            accusamus voluptas. Dignissimos, quae.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
