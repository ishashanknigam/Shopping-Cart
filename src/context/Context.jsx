import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


//create context
export const ShoppingCartContext = createContext(null);

//provide state to context

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfData, setListOfData] = useState([]);
  const [productDetails, setProductDetails] = useState(null)
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchListOfdata() {
    const apiResponse = await fetch('https://dummyjson.com/products');
    const result = await apiResponse.json();

    if (result && result?.products) {
      setListOfData(result?.products);
      setLoading(false);
    }
  }

  function handleAddToCart(getProductDetails) {

    let copyExistingCartItems = [...cartItems]
    const findIndexOfCurrentItem = copyExistingCartItems.findIndex(cartItems => cartItems.id === getProductDetails.id)

    console.log(findIndexOfCurrentItem);

    if (findIndexOfCurrentItem === -1) {
      copyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price
      })
    } else {
      //here, we increase quantity
      copyExistingCartItems[findIndexOfCurrentItem] = {
        ...copyExistingCartItems[findIndexOfCurrentItem],

        quantity: copyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice: (copyExistingCartItems[findIndexOfCurrentItem].quantity + 1) * copyExistingCartItems[findIndexOfCurrentItem].price
      }

    }

    console.log(copyExistingCartItems, "copyextit");
    setCartItems(copyExistingCartItems);
    localStorage.setItem('cartItems', JSON.stringify(copyExistingCartItems));
    navigate('/cart')
  }

  function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
    const copyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = copyExistingCartItems.findIndex(item => item.id === getProductDetails.id);

    if (isFullyRemoveFromCart) {
      copyExistingCartItems.splice(findIndexOfCurrentItem, 1)
    } else {
      copyExistingCartItems[findIndexOfCurrentItem] = {
        ...copyExistingCartItems[findIndexOfCurrentItem],

        quantity: copyExistingCartItems[findIndexOfCurrentItem].quantity - 1,
        totalPrice: (copyExistingCartItems[findIndexOfCurrentItem].quantity - 1) * copyExistingCartItems[findIndexOfCurrentItem].price,
      }
    }

    localStorage.setItem('cartItems', JSON.stringify(copyExistingCartItems));
    setCartItems(copyExistingCartItems);
  }

  useEffect(() => {
    fetchListOfdata();
    setCartItems(JSON.parse(localStorage.getItem('cartItems') || []))
  }, [])

  console.log(cartItems);

  return <ShoppingCartContext.Provider value={{ listOfData, loading, setLoading, productDetails, setProductDetails, handleAddToCart, cartItems, handleRemoveFromCart }}>
    {children}
  </ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;

//after this, wrap context in root component