import { useCount } from '../../../../hooks/useCount'
import { priceFormatter } from '../../../../utils/formatter'
import { TotalPayamentContainer, InformAboutValue } from './styles'

export function TotalPayament() {
  const { totalItems } = useCount()
  return (
    <TotalPayamentContainer>
      <InformAboutValue>
        <div>
          <p>Total de itens</p>
          <p>Entrega</p>
          <h3>Total</h3>
        </div>

        <div>
          <p>{priceFormatter.format(totalItems)}</p>
          <p>{priceFormatter.format(0)}</p>
          <h3>{priceFormatter.format(totalItems)}</h3>
        </div>
      </InformAboutValue>

      <button type="submit">CONFIRMAR PEDIDO</button>
    </TotalPayamentContainer>
  )
}
