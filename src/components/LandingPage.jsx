import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div id="Services" className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, id) => {
          return (
            <div key={id} className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {id === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                    }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] top-[0.8vw] relative bg-green-500"
                  ></motion.div>
                )}
                <h1 className="pt-[2vw] font-fg uppercase font-semibold leading-[.75] tracking-tighter text-[9vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, id) => (
          <p
            key={id}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            Start The Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
