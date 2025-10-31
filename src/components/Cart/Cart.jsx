import CartProducts from './CartProducts'
import CartSummary from './CartSummary'

function Cart() {
  return (
    <div className='h-dvh -mt-16 bg-[#0a0a0a] text-white'>
      <h3 className='pt-18 pb-2 font-bold text-3xl pl-6'>Your Cart</h3>
      <div className='flex gap-6 h-[calc(100dvh-7.25rem)] pb-6'>
        {/*left part, product overview */}
        <CartProducts />

        {/*Right part, total price and summary*/}
        <CartSummary />
      </div>
    </div>
  )
}

export default Cart
