import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { IconContainer } from '../../components/Icon'
import {
  ContainerDeliveriInformation,
  ContainerSuccess,
  DeliveryInformation,
} from './styles'
import delivery from '../../assets/delivery.svg'

export function Success() {
  return (
    <ContainerSuccess>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você </p>

      <ContainerDeliveriInformation>
        <DeliveryInformation>
          <ul>
            <li>
              <IconContainer>
                <MapPin />
              </IconContainer>
              <p>
                Entrega em Rua João Daniel Martinelli, 102, Farrapos - Porto
                Alegre, RS
              </p>
            </li>

            <li>
              <IconContainer variant="yellow">
                <Timer />
              </IconContainer>
              <p>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </p>
            </li>

            <li>
              <IconContainer variant="yellowDark">
                <CurrencyDollar />
              </IconContainer>
              <p>
                Pagamento na entrega <br />
                <strong>Cartão de Crédito</strong>{' '}
              </p>
            </li>
          </ul>
        </DeliveryInformation>

        <img src={delivery} alt="" />
      </ContainerDeliveriInformation>
    </ContainerSuccess>
  )
}
