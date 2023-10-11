import logo from "../../assets/brand/logo.svg";

const HorizontalMenu = () => {
  return (
    <div
      className={`hidden md:flex top-0 z-20 bg-primary px-8 md:items-center flex-col md:flex-row xs:flex-col md:justify-between md:h-[60px] h-[100vh] w-[50vw] md:w-full items-start pt-10 md:pt-0 gap-6`}
    >
      <a href="#">
        <img src={logo} />
      </a>

      <div className="gap-6 font-bold text-white text-sm flex flex-col md:flex-row">
        <span className="hover:text-secondary cursor-pointer">Services</span>
        <span className="hover:text-secondary cursor-pointer">Industries</span>
        <span className="hover:text-secondary cursor-pointer">Cases</span>
        <span className="hover:text-secondary cursor-pointer">Contact</span>
      </div>
      <div className="rounded-full hidden  p-2 px-6 bg-white text-primary font-bold text-sm md:flex">
        Let's Talk
      </div>
    </div>
  );
};

export default HorizontalMenu;
