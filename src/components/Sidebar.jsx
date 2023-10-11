import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileMenu } from "../slices/globalSlice";
import { Close } from "@mui/icons-material";

import logo from "../../assets/brand/logo.svg";

const Sidebar = () => {
  const dispatch = useDispatch();

  const isMobileMenuOpen = useSelector(
    (state) => state.global.isMobileMenuOpen
  );

  const handleCloseMenu = () => dispatch(toggleMobileMenu());

  return (
    <div
      className={`${
        isMobileMenuOpen ? "hidden" : "fixed"
      } md:hidden top-0 z-20 bg-primary px-8 md:items-center flex-col md:flex-row xs:flex-col md:justify-between md:h-[60px] h-[100vh] w-[50vw] md:w-full items-start pt-10 md:pt-0 gap-6`}
    >
      <a href="#">
        <img src={logo} />
      </a>

      <div
        onClick={handleCloseMenu}
        className="absolute md:hidden top-10 right-10 text-white cursor-pointer"
      >
        <Close />
      </div>

      <div className="gap-6 font-bold text-white text-sm flex flex-col md:flex-row mt-6">
        <span className="hover:text-secondary cursor-pointer">Services</span>
        <span className="hover:text-secondary cursor-pointer">Industries</span>
        <span className="hover:text-secondary cursor-pointer">Cases</span>
        <span className="hover:text-secondary cursor-pointer">Contact</span>
      </div>
      <div className="rounded-full w-1/2 mt-10 mx-auto  p-2 px-6 bg-white text-primary font-bold text-sm md:flex">
        Let's Talk
      </div>
    </div>
  );
};

export default Sidebar;
