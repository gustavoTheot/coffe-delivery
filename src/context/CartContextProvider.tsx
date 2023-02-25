import { produce } from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { coffes } from '../coffes'

export interface Coffee {
  id: string
  name: string
  img: string
  type?: string[]
  description?: string
  value: number
  quantity: number
}

interface Cart extends Coffee {}

interface CartContextProviderProps {
  children: ReactNode
}

/*
interface CreateLocationInput {
  cep: string
  street: string
  number: number
  complement: string
  neighborhood: string
  city: string
  uf: string
  typePayament: 'credit' | 'debit' | 'money'
}
*/

interface CartContextProps {
  coffees: Coffee[]
  cart: Cart[]
  cartQuantityItems: number
  loadProducts: () => void
  addCoffeToCart: (coffee: Cart) => void
  removeCartItem: (cartItemId: string) => void
  changeCartItemQuantity: (
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) => void
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [cart, setCart] = useState<Cart[]>([])

  const cartQuantityItems = cart.length

  function loadProducts() {
    const dataProduct = coffes.map((coffe) => ({
      ...coffe,
      quantity: 0,
    }))

    setCoffees(dataProduct)
  }

  function addCoffeToCart(coffee: Cart) {
    const coffeExistsInCart = cart.findIndex((cart) => cart.id === coffee.id)

    const myCart = produce(cart, (draft) => {
      if (coffeExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeExistsInCart].quantity += coffee.quantity
      }
    })

    setCart(myCart)
  }

  function changeCartItemQuantity(
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cart, (draft) => {
      const coffeeExistsInCart = cart.findIndex(
        (cart) => cart.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCart(newCart)
  }

  function removeCartItem(cartItemId: string) {
    const itemWithHourDelete = cart.filter((cart) => {
      return cart.id !== cartItemId
    })
    setCart(itemWithHourDelete)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <CartContext.Provider
      value={{
        coffees,
        cart,
        cartQuantityItems,
        loadProducts,
        addCoffeToCart,
        removeCartItem,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
