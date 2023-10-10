import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="h-[80vh] relative bg-hero bg-contain bg-center">
      <div className="bottom-28 absolute flex flex-col w-[450px] gap-y-6 left-10 h-[120px] text-white">
        <div className="text-4xl font-bold">Live with Confidence</div>
        <div>
          Jose Mourinho brings confidence to pan-African Sanlam campaign.
        </div>
        <div className="bg-primary w-36 p-2 flex items-center justify-center text-white rounded-full font-bold">
          View Project
        </div>
      </div>
    </div>
  );
};

export default Hero;
