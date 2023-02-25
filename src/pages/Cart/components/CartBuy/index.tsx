import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContextProvider'
import { CoffeCart } from '../MyCart'
import { TotalPayament } from '../TotalPayament'
import { CartBuyContainer } from './styles'

export function CartBuy() {
  const { cart } = useContext(CartContext)
  console.log(cart)

  return (
    <CartBuyContainer>
      <ul>
        {cart.map((cartItem) => {
          return (
            <li key={cartItem.id}>
              <CoffeCart key={cartItem.id} coffeeCard={cartItem} />
            </li>
          )
        })}
      </ul>
      <TotalPayament />
    </CartBuyContainer>
  )
}
