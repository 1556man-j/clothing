import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import ProductItem from "./ProductItem";
function RelatedProducts({ category, subcategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subcategory === item.subcategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <div className="inline-flex  items-center mb-3">
          <p className="text-gray-500 font font-medium uppercase">
            related
            <span className="text-gray-700 px-3">products</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>{" "}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
        console.log(related)
      </div>
    </div>
  );
}

export default RelatedProducts;
