import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../context/Context';

const ProductDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { productDetails, setProductDetails, loading, setLoading, handleAddToCart } = useContext(ShoppingCartContext)

  async function fetchProductDetails() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`)
    const result = await apiResponse.json();

    if (result) {
      setProductDetails(result)
      setLoading(false);
    };
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id])

  if (loading) return <h1 className='font-bold text-2xl text-red-400'>Product Details Loading....!!</h1>

  return (
    <div>
      <div className='p-6 max-w-7xl mx-auto'>
        <div className='grid items-center grid-cols-5 gap-10 p-6 shadow-sm'>
          <div className='col-span-3 w-full text-center '>
            <div className='px-4 py-10 rounded-xl shadow-lg relative'>
              <img className='w-4/5 object-cover rounded' src={productDetails?.thumbnail} alt={productDetails?.title} />
            </div>
            <div className='mt-6 flex flex-wrap justify-center gap-6 mx-auto'>
              {
                productDetails?.images.length ?
                  productDetails?.images.map(imageItem =>
                    <div className='rounded-xl shadow-md  p-4 flex justify-between items-center' key={imageItem}>
                      <img src={imageItem} alt='product secondary image' className='w-24 cursor-pointer  ' />
                    </div>) : null
              }
            </div>
          </div>
          <div className='col-span-2'>
            <h2 className='text-2xl font-bold'>{productDetails?.title}</h2>
            <div className='flex gap-4 mt-4'>
              <p className='text-xl font-bold' >${productDetails?.price}</p>
            </div>
            <div>
              <button onClick={() => handleAddToCart(productDetails)} className='min-w-[200px] px-4 py-3 border rounded font-semibold mt-5 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails