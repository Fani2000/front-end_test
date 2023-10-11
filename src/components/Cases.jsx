import { useState, useRef, useEffect } from "react";
import Separator from "./Seperator";
import Olympian from "../../assets/images/olympian.png";
import Savings from "../../assets/images/savings.png";
import Skhokho from "../../assets/images/skhokho.png";

const initialState = [
  {
    title: "The Olympian",
    details: "The only athlete in the world to do her Olympic routine in 2020.",
    image: Olympian,
  },
  {
    title: "The Savings Jar",
    details: "Grow your savings treasure and grow your dragon.",
    image: Savings,
  },
  {
    title: "Skhokho seMali",
    details:
      "Helping South Africans become #CashCleva with Skhokho and TymeBank.",
    image: Skhokho,
  },
];

// TODO: ENDPOINT URL: https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/

const Cases = () => {
  // prettier-ignore
  const indicatorWidthPercent = initialState.length > 0 ? 100 / initialState.length : 100;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderCurrent = sliderRef.current;

    if (!sliderCurrent) {
      return;
    }
    // Find all the slides inside of the slider
    const slides = sliderCurrent.querySelectorAll("div");

    const slidesArray = Array.from(slides);

    // Wait until a slide is 50% visible, then find it's index in the array of
    // all slides and update the currentSlideIndex
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
    <div className="px-12 py-10 flex flex-col gap-8">
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
          {initialState.map((c, i) => {
            return (
              <div
                key={i}
                className="flex-shrink-0 snap-start relative rounded-full"
              >
                <img src={c.image} className="rounded-2xl" />
                <div className="absolute text-white bottom-10 left-10 flex flex-col gap-2">
                  <Separator />
                  <div className="text-2xl font-bold">{c.title}</div>
                  <div className="w-[300px]">{c.details}</div>
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
