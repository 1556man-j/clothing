import { createContext, useEffect, useState } from "react";
import { products } from "../../assets/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };
  const getCartAmount = () => {
    let totalAmount = 0;
  
    for (let itemId in cartItems) {
      let itemInfo = products.find((product) => product._id === itemId);
  
      if (itemInfo && cartItems[itemId]) {
        const sizes = cartItems[itemId]; // Example: {M: 2, L: 1}
  
        for (let size in sizes) {
          try {
            const quantity = sizes[size]; // Number of items for the given size
  
            if (quantity > 0) {
              totalAmount += itemInfo.price * quantity; // Accumulate amount
            }
          } catch (error) {
            console.error(`Error processing item ${itemId} size ${size}:`, error);
          }
        }
      }
    }
  
    return totalAmount; // Return after all iterations
  };
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
