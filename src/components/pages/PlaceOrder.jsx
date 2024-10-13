import React, { useState } from "react";
import Title from "../Title";
import CartTotal from "../CartTotal";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return Object.values(formValues).every((value) => value.trim() !== "");
  };

  const handlePlaceOrder = () => {
    if (!isFormValid()) {
      toast.error("Please fill out all required fields before placing the order.");
    } else {
      navigate("/order");
    }
  };

  return (
    <div className="flex flex-col justify-between sm:flex-row mt-20 gap-4">
      <div className="text-left">
        <div className="text-xl text-left">
          <Title text1={"delivery"} text2={"information"} />
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="border border-gray-300 rounded py-2 w-full px-3"
              required
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="border border-gray-300 rounded py-2 w-full px-3"
              required
              onChange={handleInputChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded py-2 w-full px-3"
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            className="border border-gray-300 rounded py-2 w-full px-3"
            required
            onChange={handleInputChange}
          />
          <div className="flex gap-3">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="border border-gray-300 rounded py-2 w-full px-3"
              required
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="border border-gray-300 rounded py-2 w-full px-3"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-3">
            <input
              type="number"
              name="zipcode"
              placeholder="Zipcode"
              className="border border-gray-300 rounded py-2 w-full px-3"
              required
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="border border-gray-300 rounded py-2 w-full px-3"
              required
              onChange={handleInputChange}
            />
          </div>
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            required
            className="border border-gray-300 rounded py-2 w-full px-3"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="text-left sm:w-1/2 mt-14 w-full">
        <CartTotal />
        <div>
          <div className="mt-12">
            <Title text1={"payment"} text2={"method"} />
          </div>
          <div className="gap-3 flex flex-col lg:grid-cols-2 lg:grid xl:grd xl:grid-cols-3">
            <div
              className="flex gap-3 items-center border px-3 p-2 cursor-pointer"
              onClick={() => setMethod("stripe")}
            >
              <p
                className={`min-w-3.5 border h-3.5 rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img alt="stripe" src={assets.stripe_logo} className="mx-4 h-5" />
            </div>
            <div
              className="flex gap-3 items-center border px-3 p-2 cursor-pointer"
              onClick={() => setMethod("razorplay")}
            >
              <p
                className={`min-w-3.5 border h-3.5 rounded-full ${
                  method === "razorplay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                alt="razorpay_logo"
                src={assets.razorpay_logo}
                className="mx-4 h-5"
              />
            </div>
            <div
              className="flex gap-3 items-center border px-3 p-2 cursor-pointer uppercase"
              onClick={() => setMethod("cod")}
            >
              <p
                className={`min-w-3.5 border h-3.5 rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <h1 className="text-gray-500 font-medium text-sm">
                Cash on delivery
              </h1>
            </div>
          </div>
        </div>
        <div className="text-end mt-8">
          <button
            onClick={handlePlaceOrder}
            className="uppercase bg-black text-white px-10 p-3 cursor-pointer"
            
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
