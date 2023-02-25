import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  AboutPayament,
  ButtonPyament,
  ButtonsPayament,
  FormatPayamentContainer,
} from './style'

export interface PaymentSelecionProps {
  selectionPayament: (method: string) => void
}

export function FormPayament({ selectionPayament }: PaymentSelecionProps) {
  return (
    <FormatPayamentContainer>
      <AboutPayament>
        <CurrencyDollar />
        <span>
          Pagamento
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </span>
      </AboutPayament>

      <ButtonsPayament>
        <ButtonPyament
          type="button"
          onClick={() => selectionPayament('credit')}
        >
          <CreditCard size={16} />
          <span>Credit Card</span>
        </ButtonPyament>

        <ButtonPyament type="button" onClick={() => selectionPayament('debit')}>
          <Bank size={16} />
          <span>Debit Card</span>
        </ButtonPyament>

        <ButtonPyament type="button" onClick={() => selectionPayament('money')}>
          <Money size={16} />
          <span>Credit Card</span>
        </ButtonPyament>
      </ButtonsPayament>
    </FormatPayamentContainer>
  )
}
