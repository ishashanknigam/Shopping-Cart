import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/Context'

const CartPage = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div className='max-w-5xl mx-auto py-4'>
      <h1 className='text-2xl font-bold text-center'>Cart Page</h1>
    </div>
  )
}

export default CartPage