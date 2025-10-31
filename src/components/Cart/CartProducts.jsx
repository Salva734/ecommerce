import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import CartContext from '../../contexts/CartContext'
import { useContext } from 'react'

function CartProducts() {
  const { increaseQty, decreaseQty, viewItems } = useContext(CartContext)
  return (
    <div className=' w-3/4 pl-6 flex flex-col'>

      {viewItems.length === 0 ? (
        <p className='text-center text-white mt-10'>Cart is empty</p>
      ) : null}

      <ul className='max-h-full h-full overflow-hidden flex flex-col'>
        {viewItems.map((p) => (
          <li
            key={p.id}
            className='flex justify-between items-center gap-4 p-2 bg-[#141414] border-1 rounded-xl border-[#2a2a2a] not-last:mb-2'
             style={{ height: 'calc((100% - 0.5rem * 3) / 4)' }}
          >
            <img className='size-32' src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <span>${p.price}</span>
            <div className='flex gap-4'>
              <button
                onClick={() => decreaseQty(p.id)}
                className='cursor-pointer bg-black p-1'
              >
                <FaMinus />
              </button>
              <span>{p.quantity}</span>
              <button
                onClick={() => increaseQty(p.id)}
                className='cursor-pointer bg-black p-1'
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
