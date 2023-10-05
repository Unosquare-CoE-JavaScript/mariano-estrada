import Container from 'react-bootstrap/Container'
import { OrderDetailsProvider } from './contexts/OrderDetails'

import OrderConfirmation from './pages/common/confirmation/OrderConfirmation'
import OrderSummary from './pages/summary/OrderSummary'
import { useState } from 'react'
import OrderEntry from './pages/summary/entry/OrderEntry'

export default function App () {
  const [orderPhase, setOrderPhase] = useState('inProgress')

  let Component = OrderEntry
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry
      break
    case 'review':
      Component = OrderSummary
      break
    case 'completed':
      Component = OrderConfirmation
      break
    default:
  }
  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  )
}
