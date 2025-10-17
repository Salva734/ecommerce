import {createContext, useState} from 'react'

const CartContext = createContext()

export function CartContextProvider(props) {
const [cart, setCart] = useState([])

function setCartItems(id){
  setCart((prev) => [...prev, id])
}

  return (
    <CartContext.Provider value = {{cart, setCart, setCartItems}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext
