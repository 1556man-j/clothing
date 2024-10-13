import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../Title';
import { assets } from '../../assets/assets/frontend_assets/assets';
import CartTotal from '../CartTotal'

function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    const tempData = []
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id:items,
            size:item,
            quantity: cartItems[items][item],
            
          })
        }
      }
    }
    setCartData(tempData);
  },[cartItems])
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl text-left'>
        <Title text1={"your"} text2={"cart"}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=>product._id === item._id);
            return(
              <div key={index} className='py-4 border-t border-b text-gray-700 grid sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 grid-cols-[4fr_2fr_0.5fr]'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} alt='product' className='w-16 sm:w-20'/>
                  <div>
                    <p className='text-xs sm:text-lg font-medium text-left'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 bg-slate-50 sm:py-1 sm:px-3 border'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type='number' min={1} defaultValue={item.quantity}
               className='border max-w-10 sm:max-w-20 px-1 py-1'/>
               <img onClick={()=>updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} alt='bin' className='w-4 cursor-pointer sm:w-5 mr-4'/>
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='text-end mt-8'>
            <button onClick={()=>navigate('/place-order')} className='uppercase bg-black text-white px-6 py-3'>proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart