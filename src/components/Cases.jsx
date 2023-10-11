import { useState, useRef, useEffect } from "react";
import Separator from "./Seperator";
import { useSelector } from "react-redux";

const Cases = () => {
  const carouselData = useSelector((state) => state.global.carouselData);

  // prettier-ignore
  const indicatorWidthPercent = carouselData.length > 0 ? 100 / carouselData.length : 100;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderCurrent = sliderRef.current;

    if (!sliderCurrent) {
      return;
    }
    const slides = sliderCurrent.querySelectorAll("div");

    const slidesArray = Array.from(slides);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slidesArray.indexOf(entry.target);
            setCurrentSlideIndex(index);
          }
        });
      },
      {
        root: sliderCurrent,
        threshold: 0.5,
      }
    );
    slides.forEach((slide) => observer.observe(slide));

    return () => slides.forEach((slide) => observer.unobserve(slide));
  }, []);

  return (
    <div id="cases" className="px-12 py-10 flex flex-col gap-8">
      <div className="flex text-xl gap-x-4 items-center">
        <Separator />
        <div>Case Studies</div>
      </div>
      <div className="w-full">
        <div
          ref={sliderRef}
          className="w-full rounded-2xl flex flex-row gap-x-6 overflow-x-scroll snap-x snap-mandatory"
          style={{
            paddingBottom: "15px",
            clipPath: "inset(0 0 15px 0)",
          }}
        >
          {carouselData.map((c, i) => {
            return (
              <div
                key={i}
                className="flex-shrink-0 snap-start relative rounded-full"
              >
                <img src={c.imageUrl} className="rounded-2xl" width={400} />
                <div className="absolute text-white bottom-5 left-10 flex flex-col gap-2">
                  <Separator />
                  <div className="text-2xl font-bold">{c.title}</div>
                  <div className="w-[300px]">{c.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full h-0.5 relative bg-gray-300">
          <div
            className="h-0.5 absolute top-0 left-0 bg-gray-500"
            style={{
              width: `${indicatorWidthPercent}%`,
              left: `${indicatorWidthPercent * currentSlideIndex}%`,
              transition: "left 150ms ease-in-out",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cases;
