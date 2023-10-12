import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Separator from "./Seperator";

const Carousel = ({ cases }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === cases.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cases.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="flex-shrink-0 snap-start relative rounded-full">
        <div className="absolute slide_direction top-1/2 text-white w-full flex justify-between px-10">
          <div className="left cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </div>
          <div className="right cursor-pointer" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </div>
        </div>
        <img src={cases[currentIndex]?.imageUrl} className="rounded-2xl" />
        <div className="absolute text-white bottom-5 left-10 flex flex-col gap-2">
          <Separator />
          <div className="text-2xl font-bold">{cases[currentIndex]?.title}</div>
          <div className="w-[300px]">{cases[currentIndex]?.description}</div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center my-5 gap-5">
        {cases.map((c, index) => (
          <div
            key={index}
            className={`dot ${
              currentIndex === index ? "active" : ""
            } cursor-pointer`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
