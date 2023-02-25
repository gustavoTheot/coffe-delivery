import { Location } from './components/Location'
import {
  CheckoutContainer,
  ColumnLocationAndFormPayament,
  FullOrderContainer,
} from './styles'
import { CartBuy } from './components/CartBuy'
import { FormPayament } from './components/FormPayament'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

const newDeliveryInformationSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
  typePayament: z.string(),
})

type NewDeliveryInformationFormData = z.infer<
  typeof newDeliveryInformationSchema
>

export function Cart() {
  const { handleSubmit, reset } = useForm<NewDeliveryInformationFormData>({
    resolver: zodResolver(newDeliveryInformationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: 0,
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      typePayament: '',
    },
  })

  function handleSubmitOrder(data: NewDeliveryInformationFormData) {
    console.log('ok')

    reset()
  }

  function SelectMethodPayament() {
    return true
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleSubmitOrder)}>
        <ColumnLocationAndFormPayament>
          <Location />
          <FormPayament selectionPayament={SelectMethodPayament} />
        </ColumnLocationAndFormPayament>

        <FullOrderContainer>
          <h3>Complete seu pedido</h3>
          <CartBuy />
        </FullOrderContainer>
      </form>
    </CheckoutContainer>
  )
}
