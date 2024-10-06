import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div >
      <div className='text-3xl py-24 text-gray-600'>This page is currently under construction and will be available soon.
        <p className='text-xl mt-10'>In the meantime, you can <Link to={'/'} className='font-semibold cursor-pointer text-gray-700'> Click here  </Link>to return to the Home page.</p>
      </div>
      
    </div>
  )
}

export default Products