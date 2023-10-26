import Cart from './components/cart'
import ProductList from './components/productList'

export default function App() {
  console.log('skdjn')
  return (
    <div className="container ml-8 mt-5 flex w-full">
      <div className="w-5/6">
        <h1 className="text-2xl font-semibold mb-4">Product Listing</h1>
        <ProductList />
      </div>
      <div className="border-teal-700 rounded border ml-20 pl-4 pt-3 w-1/3 text-2xl">
        <Cart />
      </div>
    </div>
  )
}
