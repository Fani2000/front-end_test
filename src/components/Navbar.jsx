import logo from "../../assets/brand/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-primary px-16 items-center flex flex-col md:flex-row xs:flex-col justify-between md:h-[60px] ">
      <a href="#">
        <img src={logo} />
      </a>
      <div className="flex gap-6 font-bold text-white text-sm">
        <span className="hover:text-secondary cursor-pointer">Services</span>
        <span className="hover:text-secondary cursor-pointer">Industries</span>
        <span className="hover:text-secondary cursor-pointer">Cases</span>
        <span className="hover:text-secondary cursor-pointer">Contact</span>
      </div>
      <div className="rounded-full  p-2 px-6 bg-white text-primary font-bold text-sm">
        Let's Talk
      </div>
    </div>
  );
};

export default Navbar;
