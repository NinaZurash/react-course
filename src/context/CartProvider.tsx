import { Dispatch, createContext, useContext, useReducer } from 'react'
import { Product, productsList } from '../constants/productsList'

export const ActionTypes = {
  addProduct: 'addProduct',
  removeProduct: 'removeProduct',
} as const

type Action = {
  type: keyof typeof ActionTypes
  productId: number
}

const CartContext = createContext<Product[]>([])
const CartDispatchContext = createContext<Dispatch<Action>>(() => {})

const initialCart: Product[] = []

export default function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart)
  // console.log('here')
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

function cartReducer(state: Product[], action: Action): Product[] {
  switch (action.type) {
    case ActionTypes.addProduct: {
      let product = productsList.find(
        (product) => action.productId === product.id,
      )
      if (!product) throw new Error('invalid product Id')
      return [...state, product]
    }
    default: {
      return state
    }
  }
}

export function useCart() {
  return useContext(CartContext)
}

export function useCartDispatch() {
  return useContext(CartDispatchContext)
}
