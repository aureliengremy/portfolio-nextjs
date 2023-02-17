import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";

type Props = {
  pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col text-center px-10 mx-auto items-center"
    >
      <div className="mb-6 mt-24">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl">
          À propos
        </h3>
      </div>
      <div className="container mx-auto flex flex-col md:text-left md:flex-row my-auto">
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
            {pageInfo.backgroundInformationTitle}
          </h4>
          <p className="text-base">
          {pageInfo.backgroundInformation}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
