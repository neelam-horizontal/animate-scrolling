import React, { useState } from "react";
import P1 from "../assets/p2.jpg";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  const [isHovering, setisHovering] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.17"
      className="w-full p-20 rounded-tr-3xl rounded-tl-3xl bg-[#CDEA68] text-black"
    >
      <h1 className="font-nm text-[4vw] leading-[4.5vw] tracking-tight">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-20 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-5xl ">Our Approach</h1>
          <motion.button
            onMouseEnter={() => setisHovering(true)}
            onMouseLeave={() => setisHovering(false)}
            className="flex gap-10 uppercase items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white"
          >
            Read More
            {!isHovering ? (
              <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
            ) : (
              <span className="rotate-[45deg] border-2 bg-zinc-100 p-3 -m-3 rounded-full">
                <FaArrowUpLong className="fill-black" />
              </span>
            )}
          </motion.button>
        </div>
        <div
          className="w-1/2 h-[70vh] rounded-3xl bg-[#a1b562] shadow-lg shadow-[#1f464c80] transition ease-in-out delay-150 hover:scale-105
duration-300"
        >
          <img
            className="h-[-webkit-fill-available] rounded-[6%] p-5 transition ease-in-out delay-150 hover:scale-75
            duration-300"
            src={P1}
            alt="about"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
