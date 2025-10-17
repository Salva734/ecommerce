import {useContext, useEffect} from 'react'
import CartContext from '../../contexts/CartContext'

function Cart() {
    const {cart} = useContext(CartContext)

    useEffect
  return (

      <div className='bg-black text-white flex items-center justify-center h-dvh -mt-16 gap-4'>
        <div>{cart}</div>

        <div>side</div>
      </div>
    
  )
}

export default Cart
