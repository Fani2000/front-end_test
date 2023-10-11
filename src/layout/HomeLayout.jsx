import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Cases from "../components/Cases";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="overflow-hidden font-inter">
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
