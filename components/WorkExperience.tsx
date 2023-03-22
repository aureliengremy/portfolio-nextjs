import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  const orderedExp = experiences.sort((a: any,b: any) => new Date(b.dateStarted).valueOf() - new Date(a.dateStarted).valueOf())
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-full 2xl:h-screen flex flex-col relative overflow-hidden text-left max-w-full px-10 mx-auto items-center md:pt-12 2xl:pt-3"
    >
      <div className="mb-6 mt-24">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl">
          Experience
        </h3>
      </div>
      <div className="my-auto w-full flex space-x-5 overflow-x-scroll p-4 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {/* {Experience} */}
        {orderedExp.map((experience) => (
          <ExperienceCard
            key={experience._id} experience={experience}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
