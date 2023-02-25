import { Minus, Plus, Trash } from 'phosphor-react'
import { ContainerAddProduct } from '../../../../components/Product/styles'
import {
  AboutOrder,
  ItemInMyCartContainer,
  OrderOption,
  RemoveItem,
  ValueUnic,
} from './styles'

import { CartContext, Coffee } from '../../../../context/CartContextProvider'
import { useContext } from 'react'
import { priceFormatter } from '../../../../utils/formatter'

interface CoffeeCard extends Coffee {
  id: string
  name: string
  img: string
  value: number
  quantity: number
}

interface CoffeeCardProps {
  coffeeCard: CoffeeCard
}

export function CoffeCart({ coffeeCard }: CoffeeCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useContext(CartContext)

  function handleDecreseItem() {
    changeCartItemQuantity(coffeeCard.id, 'decrease')
  }

  function handleIncreaseItem() {
    changeCartItemQuantity(coffeeCard.id, 'increase')
  }

  function handleRemoveItem() {
    removeCartItem(coffeeCard.id)
  }

  const priceItems = coffeeCard.value * coffeeCard.quantity

  return (
    <ItemInMyCartContainer>
      <img src={coffeeCard.img} alt="" />

      <AboutOrder>
        <span>{coffeeCard.name}</span>

        <OrderOption>
          <ContainerAddProduct>
            <button>
              <Minus weight="bold" size={14} onClick={handleDecreseItem} />
            </button>
            <input
              type="number"
              readOnly
              max={10}
              value={coffeeCard.quantity}
            />
            <button>
              <Plus weight="bold" size={14} onClick={handleIncreaseItem} />
            </button>
          </ContainerAddProduct>

          <RemoveItem onClick={handleRemoveItem}>
            <Trash />
            Remover
          </RemoveItem>
        </OrderOption>
      </AboutOrder>

      <ValueUnic>
        <span>{priceFormatter.format(priceItems)}</span>
      </ValueUnic>
    </ItemInMyCartContainer>
  )
}
