import { MapPinLine } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import {
  AboutForm,
  DistrictAndCity,
  FalseFormContainer,
  LocationContainer,
  NumberAndComplement,
} from './styles'

export function Location() {
  const { register } = useForm()

  return (
    <LocationContainer>
      <h3>Complete seu pedido</h3>

      <FalseFormContainer>
        <AboutForm>
          <MapPinLine size={22} />

          <span>
            Endereço de Entrega
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </span>
        </AboutForm>

        <input type="number" placeholder="CEP" {...register('cep')} required />
        <input type="text" placeholder="Rua" {...register('street')} required />
        <NumberAndComplement>
          <input
            type="number"
            placeholder="Número"
            {...register('number', { valueAsNumber: true })}
            required
          />
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
            required
          />
        </NumberAndComplement>

        <DistrictAndCity>
          <input
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
            required
          />
          <input
            type="text"
            placeholder="Cidade"
            {...register('city')}
            required
          />
          <input type="text" placeholder="UF" {...register('uf')} required />
        </DistrictAndCity>
      </FalseFormContainer>
    </LocationContainer>
  )
}
