import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/Context'
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <div className='max-w-6xl mx-auto max-md:max-w-xl py-4'>
      <h1 className='text-2xl font-bold text-center'>Cart Page</h1>

      <div className='grid md:grid-cols-3 gap-8 mt-12'>
        <div className='md:col-span-2 space-y-4 '>

        </div>

        <div className='bg-gray-100  rounded-sm p-4 h-max'>
          <h3 className='text-xl font-bold border-b border-gray-300 pb-2'>Order Summary</h3>
          <ul className='mt-4 space-y-2'>
            <p className='flex flex-wrap gap-4 text-sm font-bold'>
              Total <span></span>
            </p>
          </ul>
          <div className='mt-5 flex gap-8 '>
            <button className='text-sm px-4 py-3 bg-black text-white font-bold rounded-md cursor-pointer'>Checkout</button>
            <button onClick={() => navigate('/product-list')} className='text-sm px-4 py-3 bg-black text-white font-bold rounded-md cursor-pointer'>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CartPage