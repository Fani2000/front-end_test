import Visa from "../assets/sponsors/visa-black.svg";
import TymeBank from "../assets/sponsors/tyme-bank-black.svg";
import Distell from "../assets/sponsors/distell-black.svg";
import Sportify from "../assets/sponsors/spotify-black.svg";
import Microsoft from "../assets/sponsors/Brand.svg";
import Engen from "../assets/sponsors/engen-black.svg";
import Nike from "../assets/sponsors/nike-black.svg";
import Wesgro from "../assets/sponsors/wesgrow-black.svg";
import Multichoise from "../assets/sponsors/multichoice-black.svg";
import PickNPay from "../assets/sponsors/pnp-black.svg";
import Liquid from "../assets/sponsors/liquid.svg";
import TFG from "../assets/sponsors/tfg-black.svg";
import Sanlam from "../assets/sponsors/sanlam-black.svg";
import Santam from "../assets/sponsors/santam-black.svg";
import BBC from "../assets/sponsors/bbc-black.svg";
import Separator from "./Seperator";

const initialState = [
  {
    id: "1",
    brandName: "Visa",
    image: Visa,
  },
  {
    id: "2",
    brandName: "TymeBank",
    image: TymeBank,
  },
  {
    id: "3",
    brandName: "Distell",
    image: Distell,
  },
  {
    id: "4",
    brandName: "Spotify",
    image: Sportify,
  },
  {
    id: "5",
    brandName: "Microsoft",
    image: Microsoft,
  },
  {
    id: "6",
    brandName: "Engen",
    image: Engen,
  },
  {
    id: "7",
    brandName: "Nike",
    image: Nike,
  },
  {
    id: "8",
    brandName: "Wesgro",
    image: Wesgro,
  },
  {
    id: "9",
    brandName: "MultiChoice",
    image: Multichoise,
  },
  {
    id: "10",
    brandName: "PickNPay",
    image: PickNPay,
  },
  {
    id: "11",
    brandName: "Liquid",
    image: Liquid,
  },
  {
    id: "12",
    brandName: "TFG",
    image: TFG,
  },
  {
    id: "13",
    brandName: "Sanlam",
    image: Sanlam,
  },
  {
    id: "14",
    brandName: "Santam",
    image: Santam,
  },
  {
    id: "15",
    brandName: "BBC",
    image: BBC,
  },
];

const Brands = () => {
  return (
    <div className="px-10 pb-10 flex flex-col pl-11">
      <div className="flex items-center gap-x-6 text-xl">
        <Separator />
        <div>You'll be in good company</div>
      </div>
      <div className="text-4xl my-8 font-bold">Trusted by leading brands</div>
      <div className="px-12 py-2 mt-4 flex gap-10 flex-wrap items-center">
        {initialState.map((brand, i) => {
          return <img src={brand.image} key={brand.id} />;
        })}
      </div>
    </div>
  );
};

export default Brands;
