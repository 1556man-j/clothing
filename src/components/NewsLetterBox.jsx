import React from "react";

function NewsLetterBox() {
  return (
    <div>
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off{" "}
      </p>
      <p className="text-gray-400 font-semibold mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex my-6 w-full sm:w-1/2 items-center mx-auto pl-3 gap-3 border">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-3 px-2 w-full outline-none sm:flex-1"
          required
        />
        <button type="submit" className="bg-black text-white px-10 uppercase cursor-pointer text-xs py-4">
          subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetterBox;
