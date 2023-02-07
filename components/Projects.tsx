import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-center max-w-full mx-auto items-center z-0">
      <div className="mb-6 mt-24">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mb-5">
          Projects
        </h3>
        {/* <h4 className="uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for currency profieciency.
        </h4> */}
      </div>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 my-auto scrollBarCustom">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 "
          >
            <motion.img
              initial={{y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{y:0, opacity: 1 }}
              viewport={{once:true}}
              src="/images/logo-SM360.png"
              alt="logo"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {index + 1}:
                </span>{" "}
                I&apos;m the {index + 1}
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga
                dolorem optio dicta a repellat earum deleniti doloremque
                laudantium? Fuga ipsum nemo voluptatem adipisci tempora commodi
                voluptas quasi est vel?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
