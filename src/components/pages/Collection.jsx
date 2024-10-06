import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../../assets/assets/frontend_assets/assets";
import Title from "../Title";
import ProductItem from "../ProductItem";

function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavant')
  const toggleCategory =(e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }
  const applyFilter = () =>{
    let productsCopy = products.slice()
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProduct(productsCopy)
  }

  const sortProduct = () =>{
    let fpCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

        case "high-low":
          setFilterProduct(fpCopy.sort((a,b)=>(b.price - a.price)));
          break;
        default:
          applyFilter();
          break;
    }
  }

    useEffect (()=>{
      applyFilter();
    },[category, subCategory])

    useEffect (()=>{
      sortProduct();
    },[sortType])
  return (
    <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">
      {/* filter */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="uppercase text-left cursor-pointer gap-2 my-2 text-xl flex items-center">
          filters
          <img src={assets.dropdown_icon} alt="dropdown" className={`h-3 sm:hidden block ${showFilter? "rotate-90": ""}`}/>
        </p>
        <div
          className={`border py-5 pl-5 mt-6 border-gray-300 text-left ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="uppercase mb-3 text-sm font-medium">categories</p>
          <div className="text-gray-700 text-sm gap-2 flex flex-col font-light">
            <p className="gap-2 flex">
              <input type="checkbox" value={"Men"} onChange={toggleCategory} className="w-3" />
              Men
            </p>
            <p className="gap-2 flex">
              <input type="checkbox" value={"Women"} onChange={toggleCategory} className="w-3" />
              Women
            </p>
            <p className="gap-2 flex">
              <input type="checkbox" value={"Kids"} onChange={toggleCategory} className="w-3" />
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border py-5 pl-5 mt-6 border-gray-300 text-left my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="uppercase mb-3 text-sm font-medium">type</p>
          <div className="text-gray-700 text-sm gap-2 flex flex-col font-light">
            <p className="gap-2 flex">
              <input type="checkbox" value={"Topwear"} className="w-3" onChange={toggleSubCategory}/>
              Top wear
            </p>
            <p className="gap-2 flex">
              <input type="checkbox" value={"Bottomwear"} className="w-3" onChange={toggleSubCategory} />
              Bottom wear
            </p>
            <p className="gap-2 flex">
              <input type="checkbox" value={"Winterwear"} className="w-3" onChange={toggleSubCategory} />
              Winter wear
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl">
          <Title text1={"all"} text2={"collections"}/>
          <select onChange={(e)=> setSortType(e.target.value)} className="border-2 border-gray-300 px-4 text-sm py-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: high to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-5">
          {
            filterProduct.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
              
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Collection;
