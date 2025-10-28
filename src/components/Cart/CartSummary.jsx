import {useContext} from 'react'
import CartContext from '../../contexts/CartContext'

function CartSummary() {
 const {total, pTotal, viewItems} = useContext(CartContext)

  return (
    <div className='mt-24 w-1/4 text-center'>
        <h3 className='text-3xl font-bold'>Summary</h3>
        <div>
          <ul>
            {viewItems.map((p) => (
              <li key={p.id}>
                ${p.price} x {p.quantity} = ${pTotal(p).toFixed(2)}
              </li>
            ))}
          </ul>
          <span>Total price: ${total.toFixed(2)}</span>
        </div>
      </div>
    
  )
}

export default CartSummary
