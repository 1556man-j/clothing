import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import { assets } from "../assets/assets/frontend_assets/assets";
import {useLocation} from 'react-router-dom';

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    if (location.pathname.includes("collection")) {
        setVisible(true)
    }
    else{
        setVisible(false)
    }
  },[location])


  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="border border-gray-400 inline-flex justify-center px-5 py-2 rounded-full my-5 mx-3 w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="outline-none border-none text-sm flex-1 bg-inherit"
        />
        <img
          alt="search"
          src={assets.search_icon}
          className="w-4 cursor-pointer"
        />
      </div>
      <img
        alt="close"
        src={assets.cross_icon}
        className="w-3 inline cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
}

export default SearchBar;
