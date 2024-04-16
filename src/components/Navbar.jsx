import React, { useState } from "react";
import mainLogo from "../assets/logo.svg";

function Navbar() {
  const [navbarLink, setNavbarLink] = useState("");

  const scroll = () => {
    const section = document.querySelector(navbarLink);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full px-20 py-8 font-nm flex justify-between items-center bg-[#1f1f27c2] shadow-xl shadow-[#23252c80] rounded-bl-3xl rounded-br-3xl z-[1001]">
      <div className="logo w-5">
        <img src={mainLogo} alt="mainLogo" />
      </div>
      <div className="links text-rose-100 flex gap-10 ">
        {["Services", "Projects", "About Me", "Insights", "Contact"].map(
          (item, id) => (
            <a
              key={id}
              className={`text-lg capitalize font-light ${id === 4 && "ml-32"}`}
              href={`#${item}`}
              onClick={handleClickScroll}
              // onClick={(e) => {
              //   setNavbarLink(e.target.innerText);
              //   scroll();
              //   // console.log("e", e.target.hash);
              //   // console.log("e innerText", e.target.innerText);
              // }}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
