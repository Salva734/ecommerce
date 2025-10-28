import { createContext, useState, useEffect, useMemo } from 'react'

const CartContext = createContext()

export function CartContextProvider(props) {
  const [cart, setCart] = useState()
  const [viewItems, setViewItems] = useState([])

  useEffect(() => {
    if (!cart || cart.length === 0) {
      setViewItems([])
      return
    }
    const ids = cart.map((p) => p.id).join(',')
    const url = new URL('http://localhost:3000/')
    url.searchParams.append('id', ids)

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const combined = data.map((p) => ({
          ...p,
          quantity: cart.find((c) => c.id === p.id).quantity,
        }))
        setViewItems(combined)
      })
  }, [cart])

  const total = useMemo(
    () => viewItems.reduce((acc, p) => acc + p.price * p.quantity, 0),
    [viewItems]
  )

  const pTotal = (p) => {
    return p.price * p.quantity
  }

  function setCartItems(id) {
    let newCart = cart
    if (newCart) {
      const index = newCart.findIndex((p) => p.id === id)
      if (index !== -1) {
        newCart[index].quantity += 1
      } else {
        newCart = [...newCart, { id: id, quantity: 1 }]
      }
    } else {
      newCart = [{ id: id, quantity: 1 }]
    }

    setCart(newCart)
  }

  function increaseQty(id) {
    setCart((prev) => {
      return prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    })
  }

  function decreaseQty(id) {
    setCart((prev) => {
      return prev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0)
    })
  }

  return (
    <CartContext.Provider
      value={{ cart, setCartItems, increaseQty, decreaseQty, viewItems, total, pTotal }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext