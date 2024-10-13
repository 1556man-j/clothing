import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets/frontend_assets/assets";
import RelatedProducts from "../RelatedProducts";

function Products() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState(false);
  const [size, setSize] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex flex-col-reverse sm:flex-row ">
          <div className="flex sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                className="sm:w-[90%] w-36 mt-5 sm:mt-0 sm:full sm:mb-3 cursor-pointer"
                alt="images"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="wears" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col text-left">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
          </div>
          <p className="mt-5 font-medium text-3xl">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-2/3">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p> Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border px-4 py-2 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id,size)}
            className="active:bg-gray-700 uppercase bg-black text-white py-3 px-8 w-[180px]"
          >
            add to cart
          </button>
          <hr className="mt-8 sm:h-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* ------------description & review-------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="border py-6 px-6 text-left gap-5 text-sm flex flex-col text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      {/* ------------related products----------- */}
      <RelatedProducts
        category={productData.category}
        subcategory={productData.subcategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Products;
