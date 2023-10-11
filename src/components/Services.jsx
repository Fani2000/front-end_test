import Separator from "./Seperator";
import appDev from "../assets/images/appDev.svg";
import webDev from "../assets/images/webDev.svg";
import uxIcon from "../assets/images/UxIcon.svg";
import blockChainIcon from "../assets/images/blockchain.svg";

const initialState = [
  {
    title: "Web development",
    icon: webDev,
    details:
      "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
  },
  {
    title: "User experience & design",
    icon: uxIcon,
    details:
      "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
  },
  {
    title: "Mobile app development",
    icon: appDev,
    details:
      "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
  },
  {
    title: "Blockchain solutions",
    icon: blockChainIcon,
    details:
      "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
  },
];

const Services = () => {
  return (
    <div className="px-12 py-14 flex flex-col gap-8">
      <div className="flex text-xl gap-x-4 items-center">
        <Separator />
        <div>What we Do</div>
      </div>
      <div className="text-4xl font-semibold">
        We offer a complete range of bespoke design and development services to
        help you turn your iea into digital masterpieces
      </div>
      <div className="flex items-center flex-wrap justify-between">
        {initialState.map((service, i) => {
          return (
            <div key={i} className="w-[200px] flex flex-col gap-8">
              <img src={service.icon} width={40} height={40} />
              <div className="font-bold text-md">{service.title}</div>
              <div className="">{service.details}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
