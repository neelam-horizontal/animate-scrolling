import React from "react";

function Footer() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.17"
      className="flex gap-5 w-full h-screen bg-zinc-100 px-20 !pb-0"
    >
      <div className="w-1/2 h-screen flex justify-between flex-col">
        <div className="heading mt-20">
          <h1 className="text-[8vw] uppercase leading-none text-zinc-900 font-semibold -mb-5">
            Eye-
          </h1>
          <h1 className="text-[8vw] uppercase leading-none text-zinc-900 font-semibold">
            Oppening
          </h1>
        </div>
        <div className="Footer">
          <h1 className="text-[4vw] leading-none mb-20 text-zinc-900 font-semibold">
            Neelam
          </h1>
        </div>
      </div>
      <div className="w-1/2 h-screen flex flex-col">
        <div className="heading mt-20">
          <h1 className="text-[5vw] uppercase leading-none text-zinc-900 font-semibold">
            Presentation
          </h1>
        </div>
        <div className="links text-zinc-800 mt-5 flex flex-col">
          <a className="block text-2xl font-light" href="#">
            Facebook
          </a>
          <a className="block text-2xl font-light" href="#">
            Instagram
          </a>
          <a className="block text-2xl font-light" href="#">
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
