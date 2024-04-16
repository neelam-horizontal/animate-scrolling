import React from "react";
import L1 from "../assets/L1.png";
import L2 from "../assets/L2.png";
import L3 from "../assets/L3.png";

function Cards() {
  return (
    <div className="w-full h-screen flex gap-5 items-center px-32">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center relative">
          <img
            className="w-full rounded-xl h-full bg-cover transition ease-in-out delay-150 hover:scale-75
            duration-300"
            src={L1}
            alt="LogoImg"
          />
          <button className="absolute px-5 py-1 text-zinc-900 rounded-full  border-2 left-5 bottom-5">
            Read More
          </button>
        </div>
      </div>
      <div className="cardContainer flex gap-5 h-[50vh] w-1/2">
        <div className="card w-1/2 h-full rounded-xl bg-[#202827] flex items-center justify-center relative">
          <img
            className="w-full rounded-xl h-full bg-cover transition ease-in-out delay-150 hover:scale-75
            duration-300"
            src={L2}
            alt="LogoImg"
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-5 bottom-5">
            Read More
          </button>
        </div>
        <div className="card w-1/2 h-full rounded-xl bg-[#1c2120] flex items-center justify-center relative">
          <img
            className="w-full rounded-xl h-full bg-cover transition ease-in-out delay-150 hover:scale-75
            duration-300"
            src={L3}
            alt="LogoImg"
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-5 bottom-5">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
