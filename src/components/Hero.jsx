const Hero = () => {
  return (
    <div className="h-[50vh] relative hero bg-no-repeat bg-cover bg-center">
      <div className="bottom-28 absolute flex flex-col w-[450px] gap-y-6 left-10 h-[120px] text-white">
        <div className="text-4xl font-bold">Live with Confidence</div>
        <div className="max-w-sm">
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
