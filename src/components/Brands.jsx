import Separator from "./Seperator";
import { useSelector } from "react-redux";

const Brands = () => {
  const sponsors = useSelector((state) => state.global.sponsors);

  return (
    <div className="px-10 pb-10 flex flex-col pl-11">
      <div className="flex items-center gap-x-6 text-xl">
        <Separator />
        <div>You'll be in good company</div>
      </div>
      <div className="text-4xl my-8 font-bold">Trusted by leading brands</div>
      <div className="px-12 py-2 mt-4 flex gap-10 flex-wrap items-center">
        {sponsors.map((brand, i) => {
          return (
            <div key={brand.id} className="col-3">
              <img src={brand.image} className="w-28" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
