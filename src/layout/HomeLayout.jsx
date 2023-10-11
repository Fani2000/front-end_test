import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Cases from "../components/Cases";
import Brands from "../components/Brands";

const HomeLayout = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Cases />
      <Brands />
    </div>
  );
};

export default HomeLayout;
