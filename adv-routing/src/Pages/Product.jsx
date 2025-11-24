import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
     <div>
    <div className='flex justify-center gap-10 py-4'>
      <Link className='text-xl font-semibold' to="/product/MenClothing">Men Clothing</Link>
      <Link className='text-xl font-semibold'to="/product/WomenClothing">Women Clothing</Link>
    </div>
    <h1>Product Page</h1>
    <Outlet />
   </div>
  )
}

export default Product
