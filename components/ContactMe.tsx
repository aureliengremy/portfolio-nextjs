import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, AtSymbolIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};
  
type Props = {};

const ContactMe = (props: Props) => {

    const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => 
  window.location.href = `mailto:gremy.aurelien@gmail.com?subject=${formData.subject}&body=This is : ${formData.name}. - ${formData.message} - contact him : ${formData.email}`;

  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-center max-w-full mx-auto items-center z-0">
      <div className="mb-6 mt-24">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mb-5">
          Contact me
        </h3>
        {/* <h4 className="uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency.
      </h4> */}
      </div>

      <div className="flex flex-col space-y-10 my-auto">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">Case Study</span>{" "}
          I&apos;m the
        </h4>
        <div className="">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon />
          </div> */}
          <div className="flex items-center space-x-5 justify-center">
            <AtSymbolIcon />
            <p>gremy.aurelien@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
                {...register('name')}
              className="contactInput"
              placeholder="Your name"
              type="text"
            />
            <input
            {...register('email')}
              className="contactInput"
              placeholder="Your email"
              type="email"
            />
          </div>
          <input
          {...register('subject')}
            className="contactInput"
            placeholder="Subject"
            type="text"
            name="subject"
          />
          <textarea
          {...register('message')}
            className="contactInput"
            placeholder="Your message"
            name="message"
          />
          <button
            className="bg-[#F7AB0A] py-3 px-5 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
