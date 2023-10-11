import React, { useEffect, useState } from "react";
import Separator from "./Seperator";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    const date = new Date();
    setCurrentYear(date.getFullYear());
  }, []);

  return (
    <div id="contact" className="p-10 text-white flex flex-col gap-6 pb-10 bg-primaryDark">
      <div className="flex items-center gap-4">
        <Separator />
        <div className="text-sm">Contact Us</div>
      </div>
      <div className="flex justify-between flex-wrap gap-4">
        <div className="text-2xl font-bold">
          <div>Have a project in mind?</div>
          <div>Let's make it happen</div>
        </div>
        <div>
          <div className="w-56">
            22 Street Name, Suburb, 8000, Cape Town, South African
          </div>
          <div>+27 21 431 0001</div>
          <div className="underline cursor-pointer">enquirie@website.co.za</div>
        </div>
      </div>

      <div className="flex justify-between mt-10 gap-x-2 gap-y-6 flex-wrap">
        <div className="flex flex-col w-36">
          <div className="hover:underline cursor-pointer">Terms of service</div>
          <div className="hover:underline cursor-pointer">Privacy policy</div>
          <div className="hover:underline cursor-pointer">Impressum</div>
        </div>

        <div className="flex flex-col w-36">
          <div className="hover:underline cursor-pointer">Facebook</div>
          <div className="hover:underline cursor-pointer">Instagram</div>
          <div className="hover:underline cursor-pointer">Twitter</div>
        </div>

        <div className="flex flex-col w-36">
          <div className="hover:underline cursor-pointer">Github</div>
          <div className="hover:underline cursor-pointer">Linkedin</div>
          <div className="hover:underline cursor-pointer">Teams</div>
        </div>

        <div className="flex flex-col w-36">
          <div className="hover:underline cursor-pointer">Youtube</div>
          <div className="hover:underline cursor-pointer">Behance</div>
          <div className="hover:underline cursor-pointer">Dribbble</div>
        </div>

        <div className="flex flex-col justify-between w-36">
          <div className="hover:underline cursor-pointer">
            Explore open jobs
          </div>
          <div></div>
          <div>
            &copy; 2000 - {currentYear}{" "}
            <span className="hover:underline cursor-pointer">Company Name</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
