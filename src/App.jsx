import { Route, Routes } from "react-router-dom"
import ProductList from "./components/ProductList"
import ProductDetails from "./components/ProductDetails"
import CartPage from "./components/CartPage"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-details/" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
