import React from "react";
import Title from "../Title";
import { assets } from "../../assets/assets/frontend_assets/assets";
import NewsLetterBox from "../NewsLetterBox"

function About() {
  return (
    <div>
      <div>
        <div className="text-2xl pt-8 border-t">
          <Title text1={"about"} text2={"us"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14 mt-7">
          <img
            alt="about"
            src={assets.about_img}
            className="w-full md:max-w-[450px]"
          />
          <div className="text-left text-gray-600 gap-5 flex flex-col mt-4 md:mt-0">
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <div>
              <h1 className="font-bold text-black mb-5">Our Mission</h1>
              <p>
                Our mission at Forever is to empower customers with choice,
                convenience, and confidence. We're dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
        <div className="py-14">
          <div className="text-xl">
            <Title text1={"why"} text2={"choose us"} />
          </div>
          <div className="mb-20 grid grid-cols-1 md:grid-cols-3">
            <div className="border-2 border-gray-100 text-gray-600 text-left gap-5 flex flex-col p-10 text-sm md:p-14 md:py-20">
              <h1 className="text-black font-bold">Quality Assurance:</h1>
              <p>We meticulously select and vet each product to ensure it meets our stringent quality standards</p>
            </div>
            <div className="border-2 border-gray-100 text-gray-600 text-left gap-5 flex flex-col p-10 text-sm border-t-0 md:border-t-2 md:p-14 md:py-20">
              <h1 className="text-black font-bold">Convenience:
              </h1>
              <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div>
            <div className="border-2 border-gray-100 text-gray-600 text-left gap-5 flex flex-col p-10 text-sm border-t-0 md:border-t-2 md:p-14 md:py-20">
              <h1 className="text-black font-bold">Exceptional Customer Service:
              </h1>
              <p>WOur team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            </div>
          </div>
          <NewsLetterBox/>
        </div>
      </div>
    </div>
  );
}

export default About;
