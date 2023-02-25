import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ContainerAddProduct,
  DescriptionProduct,
  ProductList,
  Value,
  ValueProduct,
} from './styles'

import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import { priceFormatter } from '../../utils/formatter'

export interface Coffe {
  id: string
  name: string
  img: string
  type?: string[]
  description?: string
  value: number
  quantity: number
}

interface CoffeProps {
  coffee: Coffe
}

export function Product({ coffee }: CoffeProps) {
  const [quantity, setQuantity] = useState<number>(1)
  const { addCoffeToCart } = useContext(CartContext)

  function handleRemoveItem() {
    if (quantity > 0) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    setQuantity((state) => state + 1)
  }

  function handleAddToCart() {
    const coffeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeToCart(coffeToAdd)
    console.log(coffeToAdd)
  }

  return (
    <ProductList>
      <img src={coffee.img} alt="" />
      <h3>{coffee.type}</h3>

      <DescriptionProduct>
        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>

        <ValueProduct>
          <Value>
            <strong>{priceFormatter.format(coffee.value)}</strong>
          </Value>

          <ContainerAddProduct>
            <button onClick={handleRemoveItem}>
              <Minus weight="bold" size={14} />
            </button>
            <input type="text" readOnly value={quantity} />
            <button onClick={handleAddItem}>
              <Plus weight="bold" size={14} />
            </button>
          </ContainerAddProduct>

          <button onClick={handleAddToCart}>
            <ShoppingCart color="white" />
          </button>
        </ValueProduct>
      </DescriptionProduct>
    </ProductList>
  )
}
