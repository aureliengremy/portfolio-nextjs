import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";
import Link from "next/link";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center bg-[#1a1933] p-12 hover:opacity-100 opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 overflow-scroll md:overflow-hidden ">
      {experience?.jobLink ? (
        <Link href={experience?.jobLink} target="_blank" rel="noopener">
         <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-16 md:h-32 xl:h-[150px] object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt={experience?.jobTitle + " job"}
        />
        </Link>
      ) : (
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-16 md:h-32 xl:h-[150px] object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt={experience?.jobTitle + " job"}
        />
      )}

      <div className="px-0 md:px-10 overflow-y-auto">
        <h4 className="text-xl md:text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-lg md:text-2xl mt-1">{experience?.company}</p>
        <div className="flex flex-wrap space-x-2 my-3">
          {/* {Tech used} */}
          {experience?.technologies.map((techno, index) => (
            <Image
              key={index}
              src={techno?.image.toString()}
              width={42}
              height={42}
              alt={techno?.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{new Date(experience.dateStarted).toLocaleDateString('en-us', { year:"numeric", month:"short"})} - {new Date(experience.dateEnded).toLocaleDateString('en-us', { year:"numeric", month:"short"})}</p>
        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
          {experience.points.map((point, index)=> (
            <li key={"point"+index}>{point}</li>

          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
