import  Button  from 'react-bootstrap/Button'
import { useOrderDetails } from '../../../contexts/OrderDetails'
import { formatCurrency } from '../../../utilities'
import Options from './Options'

export default function OrderEntry ({ setOrderPhase }) {
  const { totals } = useOrderDetails()

  return (
    <div>
      <h1>Design your sundae</h1>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button onClick={()=>setOrderPhase('review')}>order sundae</Button>
    </div>
  )
}
