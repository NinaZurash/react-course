import { useCart } from '../context/CartProvider'

export default function Cart() {
  const cart = useCart()

  return (
    <div>
      <h1>Shopping Cart 🛒</h1>
      <ul>
        {cart.map((product, i) => {
          console.log(product)
          return <li key={i}>{product.name}</li>
        })}
      </ul>
    </div>
  )
}
