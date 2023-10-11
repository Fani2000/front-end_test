import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Cases from "../components/Cases";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

import { Menu } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleMobileMenu, updateCarouselData } from "../slices/globalSlice";

const url =
  "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/";

const HomeLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateCarouselData(data));
      })
      .catch((err) => {
        console.log("ERROR: ", err);
        // TODO: Put the error capturing system
      });
  });

  const handleOpenMenu = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <div className="overflow-hidden font-inter relative">
      <div
        onClick={handleOpenMenu}
        className="fixed z-20 text-white cursor-pointer top-5 left-10 md:hidden"
      >
        <Avatar style={{ background: "#430964" }}>
          <Menu />
        </Avatar>
      </div>
      <Navbar />
      <Hero />
      <Services />
      <Cases />
      <Brands />
      <Footer />
    </div>
  );
};

export default HomeLayout;
