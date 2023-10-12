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
import { GrudCarouselModule } from "../modules/mod_carousel";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../collections";

const grudCarouselModule = new GrudCarouselModule();

const HomeLayout = () => {
  const carouselData = useLiveQuery(() => db.carousel.toArray());
  const dispatch = useDispatch();

  const worker = new Worker(
    new URL("../workers/carousel.worker.js", import.meta.url),
    { type: "module" }
  );

  worker.onmessage = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log("DATA: ", carouselData?.length);
    if (carouselData?.length > 0) dispatch(updateCarouselData(carouselData));
  }, [carouselData]);

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
