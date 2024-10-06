import React, { useContext } from "react";
import { ShopContext } from "./context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);
  return (
    <div>
      <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out"
            src={image}
            alt="Product"
          />
        </div>
        <p className="text-left pt-3 pb-1 text-sm">{name}</p>
        <p className="text-left font-medium text-sm">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  );
}

export default ProductItem;
