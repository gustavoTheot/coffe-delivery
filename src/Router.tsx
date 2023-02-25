import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout/index'

import { Home } from './pages/Home'
import { Cart } from './pages/Cart/index'
import { Success } from './pages/Success/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
