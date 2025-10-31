import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import Button from '../Shared/Button'

function CartSummary() {
  const { total, pTotal, viewItems } = useContext(CartContext)

  return (
    <div className='w-1/4 flex flex-col mr-6 justify-between p-4 bg-[#141414] border-1 border-[#2a2a2a] rounded-lg'>
      <div>
      <h3 className='text-2xl font-bold pb-4'>Order Summary</h3>
      <ul>
        {viewItems.map((p) => (
          <li key={p.id} className='flex justify-between items-center'>
            <span>
              ${p.price} x {p.quantity}
            </span>
            <span>${pTotal(p).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      </div>
      <div className='flex flex-col gap-2 pb-2'>
        <div className='flex justify-between'>
          <span className='text-2xl font-semibold'>Total</span>
          <span className='text-2xl font-semibold text-[#615fff]'> ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <Button title='Checkout' />
      </div>
    </div>
  )
}

export default CartSummary
