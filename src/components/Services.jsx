import Separator from "./Seperator";
import { useSelector } from "react-redux";

const Services = () => {
  const services = useSelector((state) => state.global.services);
  return (
    <div id="services" className="px-12 py-14 flex flex-col gap-8">
      <div className="flex text-xl gap-x-4 items-center">
        <Separator />
        <div>What we Do</div>
      </div>
      <div className="md:text-4xl sm:text-2xl max-w-[900px] font-semibold">
        We offer a complete range of bespoke design and development services to
        help you turn your iea into digital masterpieces
      </div>
      <div className="flex items-center flex-wrap gap-10 justify-between">
        {services.map((service, i) => {
          return (
            <div
              key={i}
              className="sm:w-[250px] md:w-[200px] flex flex-col gap-8"
            >
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
