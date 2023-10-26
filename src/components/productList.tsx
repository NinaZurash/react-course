import { productsList } from '../constants/productsList'
import { ActionTypes, useCartDispatch } from '../context/CartProvider'

export default function ProductList() {
  const dispatch = useCartDispatch()
  function handleAddToCart(id: number) {
    dispatch({
      type: ActionTypes.addProduct,
      productId: id,
    })
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productsList.map((product) => (
        <div key={product.id} className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mt-2 text-gray-800">In Stock: {product.quantity}</p>
          <button
            onClick={() => handleAddToCart(product.id)}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}
