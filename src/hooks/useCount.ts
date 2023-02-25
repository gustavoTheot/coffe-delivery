import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

export function useCount() {
  const { cart } = useContext(CartContext)

  const unicProduct = cart.map((items) => {
    return items.value * items.quantity
  })

  const total = unicProduct.reduce(
    (accumulator, item) => {
      accumulator.totalItems += item

      return accumulator
    },
    { totalItems: 0 },
  )

  return total
}
