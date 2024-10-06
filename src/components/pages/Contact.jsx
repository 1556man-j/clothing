import React from "react";
import Title from "../Title";
import { assets } from "../../assets/assets/frontend_assets/assets";
import NewsLetterBox from "../NewsLetterBox";

function Contact() {
  return (
    <div>
      <div className="text-2xl pt-8 border-t">
        <Title text1={"contact"} text2={"us"} />
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-16 pb-20">
        <img
          alt="contact"
          src={assets.contact_img}
          className="w-full md:max-w-[450px]"
        />
        <div className="text-left text-gray-500 flex flex-col gap-5 py-5 text-lg">
          <div className="flex flex-col gap-5">
            <h1 className="text-gray-700 font-bold text-lg">Our Store</h1>
            <ul>
              <li>54709 Willy Station</li>
              <li>Suite 350, Osun State, Nigeria</li>
            </ul>
            <ul>
              <li>+234 901 451 1157</li>
              <li>Email:awosojiemmanuel@gmail.com</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-gray-700 font-bold">Careers at Forever</h1>
            <p>Learn more about our teams and job openings.</p>
          </div>
          <button className="text-sm border-black py-5 text-black border hover:text-white hover:bg-black justify-center transition-all duration-300 w-[150px]">Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
}

export default Contact;
