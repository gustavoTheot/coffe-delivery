// import { createContext, useContext } from 'react'
import { useContext } from 'react'
import { Product } from '../../components/Product'
import { CartContext } from '../../context/CartContextProvider'
import { AboutProduct } from './components/About'
import { ContainerBuy } from './styled'

export function Home() {
  const { coffees } = useContext(CartContext)

  return (
    <main>
      <AboutProduct />
      <ContainerBuy>
        <h1>Nossos cafés</h1>

        <ul>
          {coffees.map((coffe) => {
            return (
              <li key={coffe.id}>
                <Product coffee={coffe} />
              </li>
            )
          })}
        </ul>
      </ContainerBuy>
    </main>
  )
}
