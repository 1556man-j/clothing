import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";

function OurPolicy() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-12 text-xs sm:text-sm md:text-base text-gray-700 font-semibold py-20">
      <div>
        <img
          src={assets.exchange_icon}
          alt="exchange"
          className="w-12 m-auto mb-5"
        />
        <p>Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          alt="exchange"
          className="w-12 m-auto mb-5"
        />
        <p>7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div>
        <img
          src={assets.support_img}
          alt="exchange"
          className="w-12 m-auto mb-5"
        />
        <p>Best customer support</p>
        <p className="text-gray-400">we provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default OurPolicy;
