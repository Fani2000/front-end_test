import { createSlice } from "@reduxjs/toolkit";

import Visa from "../../assets/sponsors/visa-black.svg";
import TymeBank from "../../assets/sponsors/tyme-bank-black.svg";
import Distell from "../../assets/sponsors/distell-black.svg";
import Sportify from "../../assets/sponsors/spotify-black.svg";
import Microsoft from "../../assets/sponsors/Brand.svg";
import Engen from "../../assets/sponsors/engen-black.svg";
import Nike from "../../assets/sponsors/nike-black.svg";
import Wesgro from "../../assets/sponsors/wesgrow-black.svg";
import Multichoise from "../../assets/sponsors/multichoice-black.svg";
import PickNPay from "../../assets/sponsors/pnp-black.svg";
import Liquid from "../../assets/sponsors/liquid.svg";
import TFG from "../../assets/sponsors/tfg-black.svg";
import Sanlam from "../../assets/sponsors/sanlam-black.svg";
import Santam from "../../assets/sponsors/santam-black.svg";
import BBC from "../../assets/sponsors/bbc-black.svg";

import appDev from "../../assets/images/appDev.svg";
import webDev from "../../assets/images/webDev.svg";
import uxIcon from "../../assets/images/UxIcon.svg";
import blockChainIcon from "../../assets/images/blockchain.svg";

const services = [
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

// Ideally You would request this from the end point and then either store them in the memory store or maybe persist them to avoid too many requests.
const sponsors = [
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

export const globalSlice = createSlice({
  name: "GlobalSlice",
  initialState: {
    isMobileMenuOpen: false,
    carouselData: [],
    sponsors,
    services,
  },
  reducers: {
    toggleMobileMenu: (state, action) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    updateCarouselData: (state, action) => {
      state.carouselData = action.payload;
    },
  },
});

export const { toggleMobileMenu, updateCarouselData } = globalSlice.actions;

export default globalSlice.reducer;
