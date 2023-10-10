import React from "react";

const Navbar = () => {
  return (
    <div className="bg-primary px-16 items-center flex justify-between h-[80px]">
      <a href="#">
        <img className="" src="src/assets/brand/logo.svg" />
      </a>
      <div className="flex gap-6 text-lg font-bold text-white">
        <span>Services</span>
        <span>Industries</span>
        <span>Cases</span>
        <span>Contact</span>
      </div>
      <div className="rounded-full  p-2 px-6 bg-white text-primary font-bold">
        Let's Talk
      </div>
    </div>
  );
};

export default Navbar;
