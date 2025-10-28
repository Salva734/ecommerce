import CartProducts from './CartProducts'
import CartSummary from './CartSummary'

function Cart() {
  return (
    <div className='bg-black text-white flex h-dvh -mt-16 gap-4 justify-center'>
      {/*left part, product overview */}
      <CartProducts />

      {/*Right part, total price and summary*/}
      <CartSummary />
    </div>
  )
}

export default Cart