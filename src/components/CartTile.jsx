import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/Context'

const CartTile = ({ singleCartItem }) => {
  const { handleRemoveFromCart, handleAddToCart } = useContext(ShoppingCartContext);

  return (
    <>
      <div className='grid grid-cols-3 gap-5 px-10'>
        <div className='col-span-2 flex gap-4'>
          <div className='w-28 h-28 max-sm:w-20 bg-gray-200 p-1 rounded-sm shrink-0 shadow'>
            <img src={singleCartItem?.thumbnail} className='w-full h-full object-contain hover:scale-110 transition-all duration-200' />
          </div>

          <div className='my-auto'>
            <h3 className='font-bold'>{singleCartItem?.title}</h3>
            <button onClick={() => handleRemoveFromCart(singleCartItem, true)} className='mt-3 text-sm px-4 py-3 bg-black text-white font-bold rounded-md cursor-pointer'>Remove</button>
          </div>
        </div>

        <div className='ml-auto'>
          <h3 className='text-md  font-semibold'>${singleCartItem?.totalPrice.toFixed(2)}</h3>
          <p className='mt-2 mb-3 font-semibold text-[14px]'>Quantity: {singleCartItem.quantity}</p>

          <div className='mt-2'>
            <button onClick={() => handleRemoveFromCart(singleCartItem, false)}
              disabled={singleCartItem?.quantity === 1}
              className='disabled:bg-red-200 disabled:opacity-40 disabled:cursor-not-allowed mt-3 text-sm px-3 py-1 font-extrabold border-2 border-black text-black  rounded-md cursor-pointer mr-2'>-</button>

            <button onClick={() => handleAddToCart(singleCartItem)}
              className='mt-3 text-sm px-3 py-1 border-2 border-black text-black font-extrabold rounded-md cursor-pointer'>+</button>
          </div>

        </div>
      </div>
      <hr className='ml-10'></hr>
    </>
  )
}

export default CartTile