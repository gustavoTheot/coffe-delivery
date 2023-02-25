import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import publicCoffe from '../../../../assets/publicCoffe.svg'
import { IconContainer } from '../../../../components/Icon'
import {
  AboutContainer,
  AboutPurchase,
  CupCoffe,
  TitleMarketing,
} from './styles'

export function AboutProduct() {
  return (
    <AboutContainer>
      <div>
        <TitleMarketing>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleMarketing>

        <AboutPurchase>
          <ul>
            <li>
              <IconContainer variant="yellowDark">
                <ShoppingCart />
              </IconContainer>
              <p>Compra simples e segura</p>
            </li>

            <li>
              <IconContainer variant="gray">
                <Package />
              </IconContainer>
              <p>Embalagem mantém o café intacto</p>
            </li>

            <li>
              <IconContainer variant="yellow">
                <Timer />
              </IconContainer>
              <p>Entrega rápida e rastreada</p>
            </li>

            <li>
              <IconContainer>
                <Coffee />
              </IconContainer>
              <p>O café chega fresquinho até você</p>
            </li>
          </ul>
        </AboutPurchase>
      </div>

      <CupCoffe>
        <img src={publicCoffe} alt="" />
      </CupCoffe>
    </AboutContainer>
  )
}
