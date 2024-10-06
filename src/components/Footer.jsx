import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

function Footer() {
  return (
    <div>
    <div className='mt-40 my-10 gap-14 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr]'>
        <div className='text-left'>
            <img src={assets.logo} alt='logo' className='w-32 mb-5'/>
            <p className='w-full md:w-2/3 text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='text-left'>
            <h1 className='text-xl font-medium mb-5 uppercase'>company</h1>
            <ul className='text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='text-left'>
            <h1 className='text-xl font-medium mb-5 uppercase'>get in touch</h1>
            <ul className='text-gray-600'>
                <li>+234 901 451 1157</li>
                <li>awosojiemmanuel2019@gmail.com</li>
                <li>instagram</li>
            </ul>
        </div>
    </div>
    <div>

    </div>
    <hr/>
    <p className='py-y text-sm'>Copyright 2024@ man-j - All Right Reserved</p>
    </div>
  )
}

export default Footer