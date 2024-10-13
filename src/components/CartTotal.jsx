import React from 'react'
import { useContext } from 'react'
import { ShopContext } from './context/ShopContext'
import Title from './Title';

function CartTotal() {

    // Get the context from the ShopContext
    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);


  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'cart'} text2={'totals'}/>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between items-center'>
                <div>Subtotal</div>
                <div>{currency}{getCartAmount()}.00</div>
            </div>
            <hr/>
            <div className='flex justify-between items-center'>
                <div>Shipping fee</div>
                <div>{currency}{delivery_fee}.00</div>
            </div>
            <hr/>
            <div className='flex justify-between items-center'>
                <b>Total</b>
                <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() +  delivery_fee}.00</b>
            </div>
        </div>
      
    </div>
  )
}

export default CartTotal
