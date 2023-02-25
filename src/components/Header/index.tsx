import { Navigate, NavLink } from 'react-router-dom'
import logoCoffe from '../../assets/logoCoffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, Location, State } from './styles'
import { BuyButton } from '../Button'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider'

export function Header() {
  const { cartQuantityItems } = useContext(CartContext)

  function handleNavigation() {
    return <Navigate to="/checkout" replace={true} />
  }

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffe} alt="" />
      </NavLink>

      <State>
        <Location>
          <MapPin /> Rio de Janeiro, RJ
        </Location>
        <NavLink to="/cart">
          <BuyButton addToCart={handleNavigation} variant="yellowLight">
            {cartQuantityItems >= 1 && <span>{cartQuantityItems}</span>}
            <ShoppingCart />
          </BuyButton>
        </NavLink>
      </State>
    </HeaderContainer>
  )
}
