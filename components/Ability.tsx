import React from "react";
import { motion } from "framer-motion";
// import {fetchSkills} from '../utils/fetchSkills'

type Props = {
  directionLeft: boolean;
};

const Ability = ({ directionLeft }: Props) => {
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
        
          <svg
            className="object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-500 ease-in-out"
            viewBox="0 0 128 128"
          >
            <path
              fill="#E44D26"
              d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
            ></path>
            <path
              fill="#F16529"
              d="M64 116.8l36.378-10.086 8.559-95.878H64z"
            ></path>
            <path
              fill="#EBEBEB"
              d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
            ></path>
            <path
              fill="#fff"
              d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
            ></path>
          </svg>
      </motion.div>
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">HTML</p>
            </div>
        </div>
    </div>
  );
};
export default Ability;
