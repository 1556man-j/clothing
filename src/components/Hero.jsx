import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";

function Hero() {
  return (
    <div className="justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center border border-black/50">
        <div className="flex flex-col sm:space-y-4 text-[#414141] sm: py-10">
          <div>
            <p className="flex justify-center items-center gap-2 uppercase text-sm">
            <hr className="w-8 md:w-11 bg-[#414141] border-none h-[2px]" />
            our bestsellers
            </p>
          </div>
          <div className="flex justify-center">
            <h1 className="prata-regular text-3xl text-right font-medium leading-relaxed lg:text-5xl">Latest Arrivals</h1>
          </div>
          <div>
            <p className="flex justify-center items-center gap-2 uppercase text-sm">
              shop now
              <hr className="w-8 md:w-11 bg-[#414141] border-none h-[2px]" />
            </p>
          </div>
        </div>
        <div>
          <img alt="hero" src={assets.hero_img} className="w-full"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
