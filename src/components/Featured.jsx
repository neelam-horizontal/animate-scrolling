import React, { useState } from "react";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/p3.jpg";
import P4 from "../assets/p4.jpg";
import { motion, useAnimation } from "framer-motion";

function Featured() {
  // opt 1 -----------------
  // const [isHovering, setisHovering] = useState(false);
  // opt 1 -----------------

  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-nm tracking-tight">Featured Projects</h1>
      </div>

      <div className="w-full flex gap-10 py-5 px-5">
        <h1 className="relative flex w-1/2 pl-20 items-center">
          <div className="w-[10px] h-[10px] rounded-full mr-2 bg-zinc-100"></div>
          FYDE
        </h1>
        <h1 className="relative flex w-1/2 items-center">
          <div className="w-[10px] h-[10px] rounded-full mr-2 bg-zinc-100"></div>
          VISE
        </h1>
      </div>

      {/* cards */}
      <div className="px-20 py-10">
        <div className="two-cards w-full flex gap-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            // opt 1 -----------------
            // onMouseEnter={() => setisHovering(true)}
            // onMouseLeave={() => setisHovering(false)}
            // text-shadow: 3px 2px 3px black;
            // opt 1 -----------------
            className="cardContainer relative w-1/2 h-[75vh] bg-[#282f34]"
          >
            {/* background-color: #3c485833;
          width: 100vw; */}
            <h1 className="absolute flex overflow-hidden right-0 translate-x-1/2 translate-y-1/2 top-1/3 text-[#CDEA68] drop-shadow-md z-[9] text-8xl font-semibold leading-none tracking-tighter">
              {"FYDE".split("").map((item, id) => (
                <motion.span
                  key={id}
                  className="inline-block bg-[#3c485833] p-1"
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: id * 0.06,
                  }}
                  // opt 1 -----------------
                  // animate={{ y: isHovering ? "-100%" : "100%" }}
                  // transition={{
                  //   duration: 0.6,
                  //   ease: [0.19, 1.009, 0.29, 1.001],
                  // }}
                  // opt 1 -----------------
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src={P1}
                alt="projectImg"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh] bg-[#282f34]"
          >
            <h1 className="absolute flex overflow-hidden left-0 -translate-x-1/2 -translate-y-1/2 top-[47.5%] text-[#CDEA68] drop-shadow-md z-[9] text-8xl font-semibold leading-none tracking-tighter">
              {"VISE".split("").map((item, id) => (
                <motion.span
                  key={id}
                  className="inline-block bg-[#3c485833] p-1"
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: id * 0.06,
                  }}
                  // animate={{ y: isHovering ? "0%" : "100%" }}
                  // animate={{ y: isHovering ? "-100%" : "100%" }}
                  // transition={{
                  //   duration: 0.6,
                  //   ease: [0.19, 1.009, 0.29, 1.001],
                  // }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src={P2}
                alt="projectImg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex gap-10 py-5 px-5">
        <div className="w-1/2 pl-16">
          <button className="px-5 py-1 rounded-full border-2 left-10 bottom-10">
            Read More
          </button>
        </div>
        <div className="w-1/2">
          <button className="px-5 py-1 rounded-full border-2 left-10 bottom-10">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
