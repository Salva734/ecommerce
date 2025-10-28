import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import CartContext from '../../contexts/CartContext'
import { useContext } from 'react'

function CartProducts() {
    const { increaseQty, decreaseQty, viewItems } = useContext(CartContext)
  return (
    <div className='mt-24 mb-8 w-3/4 pl-4 flex flex-col gap-2'>
        <h3 className='text-3xl font-bold'>Products in Cart</h3>
        <ul className='max-h-full h-full overflow-y-auto'>
          {viewItems.map((p) => (
            <li
              key={p.id}
              className='flex justify-between items-center gap-4 p-2 max-h-1/4 odd:bg-[#111111] even:bg-[#333333] '
            >
              <img className='size-32' src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <span>${p.price}</span>
              <div className='flex gap-4'>
                <button
                  onClick={() => decreaseQty(p.id)}
                  className='cursor-pointer'
                >
                  <FaMinus />
                </button>
                <span>{p.quantity}</span>
                <button
                  onClick={() => increaseQty(p.id)}
                  className='cursor-pointer'
                >
                  <FaPlus />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default CartProducts
