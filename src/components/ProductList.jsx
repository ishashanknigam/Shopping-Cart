import { useContext } from "react";
import { ShoppingCartContext } from "../context/Context";
import ProductTile from "./ProductTile";

function ProductList() {
  const { listOfData, loading } = useContext(ShoppingCartContext);

  if (loading) {
    return <h1 className="text-3xl text-red-400 font-bold">Loading Data! Please wait!!</h1>
  }

  return <section className="py-6 bg-white">
    <div className="px-4 mx-auto mx-w-7xl">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-950">Our Featured Product</h2>
      </div>
      <div className="mx-auto max-w-2xl grid grid-cols-3 gap-3 mt-20">
        {
          listOfData && listOfData.length > 0 ?
            listOfData.map(singleProductTile => <ProductTile key={singleProductTile.id} singleProductTile={singleProductTile} />) :
            <h3>No product found.</h3>
        }
      </div>
    </div>
  </section>

}

export default ProductList;