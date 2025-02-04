import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../context/Context';

const ProductTile = ({ singleProductTile }) => {
  const navigate = useNavigate();
  const { handleAddToCart, cartItems } = useContext(ShoppingCartContext)

  function handleNavigateToProductDetailsPage(getCurrentProductId) {
    navigate(`/product-details/${getCurrentProductId}`)
  }

  return (
    <div className='font-semibold border cursor-pointer p-5'>
      <div >
        <img src={singleProductTile?.thumbnail} alt={singleProductTile.title} className='object-cover w-full h-full hover:scale-125 transition-all duration-300' />
      </div>

      <div className='flex items justify-between  mt-5'>
        <div className='text-gray-900'>
          <p className='w-[110px] overflow-hidden text-ellipsis whitespace-nowrap'>{singleProductTile.title}</p>
        </div>
        <div className='text-right self-center'>
          {<p className='text-[13px] font-bold text-gray-900'>${singleProductTile.price}</p>}
        </div>
      </div>

      <button onClick={() => handleNavigateToProductDetailsPage(singleProductTile.id)} className='w-full px-4 py-2 mt-4 bg-black text-white text-lg cursor-pointer'>View Details</button>

      <button disabled={cartItems.findIndex(items => items.id === singleProductTile.id) > -1} onClick={() => handleAddToCart(singleProductTile)} className='disabled:opacity-65 disabled:cursor-not-allowed  w-full px-4 py-2 mt-4 bg-black text-white text-lg cursor-pointer'>Add to Cart</button>
    </div>
  )
}

export default ProductTile