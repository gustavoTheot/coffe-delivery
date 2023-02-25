import expressoTradicional from './assets/expressoTradicional.svg'
import expressoAmericano from './assets/expressoAmericano.svg'
import expressoCremoso from './assets/expressoCremoso.svg'
import expressoGelado from './assets/expressoGelado.svg'
import cafeComLeite from './assets/cafeComLeite.svg'
import { Coffe } from './context/CartContextProvider'

export const coffes: Coffe[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    img: `${expressoTradicional}`,
    type: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    quantity: 0,
  },

  {
    id: '2',
    name: 'Expresso Americano',
    img: `${expressoAmericano}`,
    type: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    quantity: 0,
  },

  {
    id: '3',
    name: 'Expresso Cremoso',
    img: `${expressoCremoso}`,
    type: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    quantity: 0,
  },

  {
    id: '4',
    name: 'Expresso Gelado',
    img: `${expressoGelado}`,
    type: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    quantity: 0,
  },

  {
    id: '5',
    name: 'Café com Leite',
    img: `${cafeComLeite}`,
    type: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    quantity: 0,
  },
]
