function PriceCalculator({price, discount, text}) {

    const finalPrice = price - price * (discount / 100)

  return (
    <>
    {discount ? (
            <div className={`flex flex-col ${text}`}>
              <span className='line-through text-gray-500'>${price}</span>
              <span>${finalPrice.toFixed(2)}</span>
            </div>
          ) : (
            <span>${price}</span>
          )}
    </>
  )
}

export default PriceCalculator
