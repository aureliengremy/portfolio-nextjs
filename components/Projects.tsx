import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "../sanity/sanity";
import Link from "next/link";
import Image from "next/image";
import { LinkIcon  } from "@heroicons/react/24/solid";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-center max-w-full mx-auto items-center z-0">
      <div className="mb-6 mt-24">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mb-5">
          Projets
        </h3>
        {/* <h4 className="uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for currency profieciency.
        </h4> */}
      </div>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 my-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, index) => {
          const withLink = project?.linkToBuild;
          return (
            <div
              key={project._id}
              className="w-full h-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-16 md:p-32"
            >
              <div className="relative group">
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  src={urlFor(project?.image).url()}
                  alt={project?.title + " screenshot"}
                  className="group-hover:blur-sm h-80 lg:h-[450px] xl:h-[600px] object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-2/3">
                  <div className="space-y-10 p-3 md:p-10 md:py-5 max-w-6xl rounded-lg backdrop-blur-md bg-[#1a1933]/40 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-10 group-hover:ease-in-out group-hover:duration-500 border border-[#ffa700]">
                    {withLink ? (
                      <Link
                        href={project?.linkToBuild}
                        className="text-4xl font-semibold text-center"
                      >
                        <div className="flex justify-center items-center">
                          <span className="underline decoration-[#F7AB0A]/50 mr-2">
                            {project?.title}
                          </span>
                          <LinkIcon width={24} height={24}/>
                        </div>
                      </Link>
                    ) : (
                      <h4 className="text-4xl font-semibold text-center">
                        <span className="underline decoration-[#F7AB0A]/50">
                          {project?.title}
                        </span>
                      </h4>
                    )}
                    <p className="text-lg text-center md:text-left">
                      {project?.summary}
                    </p>
                    <div className="flex flex-wrap my-3">
                      {/* {Tech used} */}
                      {project?.technologies.map((techno, index) => (
                        <Image
                          key={index}
                          src={techno?.image.toString()}
                          width={42}
                          height={42}
                          alt={techno?.title}
                          className="m-1"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
