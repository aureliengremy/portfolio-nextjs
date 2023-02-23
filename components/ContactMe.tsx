import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, AtSymbolIcon } from "@heroicons/react/24/solid";
// import { useForm, SubmitHandler } from "react-hook-form";
import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";

type Props = {
  pageInfo: PageInfo
};

const ContactMe = ({pageInfo}: Props) => {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-center max-w-full mx-auto items-center z-0">
      <div className="mb-6 mt-24">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mb-5">
          Contactez moi
        </h3>
      </div>
      <div className="container mx-auto flex flex-col md:text-left lg:flex-row items-center my-auto">
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
          src={urlFor(pageInfo?.contactPic).url()}
          alt="photo de Aurelien Gremy"
          className="hidden md:flex mb-5 lg:m-auto flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-fit md:h-64 lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[400px]"
        />
        <motion.div className="space-y-10 px-0 lg:px-10 xl:m-auto">
          <div className="flex items-center space-x-5 justify-center">
            <AtSymbolIcon width={122} height={122} />
            {/* <p>gremy.aurelien@gmail.com</p> */}
          </div>

          <form
            className="flex flex-col space-y-2 w-fit mx-auto"
            action="https://formsubmit.co/gremy.aurelien@gmail.com"
            // onSubmit={onSubmit}
            method="POST"
          >
            <input
              type="hidden"
              name="_token"
              value="gh29HGwAUw3W25ewpNGObPgu2xoNsmcxt2NZaDkx"
            />
            <div className="flex space-x-2">
              <input
                className="contactInput"
                placeholder="Votre nom"
                type="text"
              />
              <input
                className="contactInput"
                placeholder="Votre email"
                type="email"
              />
            </div>
            <input
              className="contactInput"
              placeholder="Sujet"
              type="text"
              name="subject"
            />
            <textarea
              className="contactInput"
              placeholder="Votre message"
              name="message"
            />
            <button
              className="bg-[#F7AB0A] py-3 px-5 rounded-md text-black font-bold text-lg"
              type="submit"
            >
              Envoyer
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;
