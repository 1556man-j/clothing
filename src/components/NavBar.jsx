import React, { useState } from "react";
import { assets } from "../assets/assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <Link to='/'> <img src={assets.logo} alt="logo" className="w-32" /></Link>
      <div className="hidden sm:block">
        <ul className="uppercase flex gap-5 ">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 bg-gray-700 border-none h-[1.5px] hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>collection</p>
            <hr className="w-2/4 bg-gray-700 border-none h-[1.5px] hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>about</p>
            <hr className="w-2/4 bg-gray-700 border-none h-[1.5px] hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>contact</p>
            <hr className="w-2/4 bg-gray-700 border-none h-[1.5px] hidden" />
          </NavLink>
        </ul>
      </div>
      <div className="flex gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />
        <div className="relative group">
          <Link to='/login'> <img
            alt="user"
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
          /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col w-36 gap-2 py-3 px-5 bg-slate-50 text-left rounded text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <Link to='/login'><p className="cursor-pointer hover:text-black">Login</p></Link>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart"
            className="w-5 cursor-pointer"
          />
          <span className="absolute bg-black rounded-full w-4 text-white font-bold right-[-6px] text-[8px] top-3 aspect-square text-center leading-4">
            0
          </span>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 sm:hidden"
          alt="menu"
        />
      </div>
      <div
        className={`absolute right-0 top-0 bottom-0 bg-white transition-all overflow-hidden ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex gap-4 p-4 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="back"
              className="h-5 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="uppercase text-left py-2 border px-8"
          >
            home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="uppercase text-left py-2 border px-8"
          >
            collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="uppercase text-left py-2 border px-8"
          >
            about
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="uppercase text-left py-2 border px-8"
          >
            contact
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/admin-panel"
            className="uppercase text-left py-2 border px-8"
          >
            admin panel
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
