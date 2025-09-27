import products from '../assets/products'

function ProductCard() {
  return (
    <div className='h-screen bg-black text-white flex flex-col'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold pb-6 pt-22'>
          Get the new RTX 50 Series
        </h1>
      </div>
      <div className='flex gap-6 md:justify-center bg-black flex-nowrap overflow-x-auto px-6 md:px-0'>
        {products.map((product) => (
          <div
            key={product.id}
            className='w-3xs min-w-3xs bg-[#222222] flex flex-col items-center cursor-pointer border-white'
          >
            <div className='w-full h-full mb-3 flex items-center justify-center bg-[#111111]'>
              <img
                className='w-full h-full object-cover'
                src={product.img}
                alt={product.name}
              />
            </div>
            <h4 className='text-lg font-semibold mb-1 text-center'>
              {product.name}
            </h4>
            <span className='font-bold text-base mb-1'>${product.price}</span>
            <button className='border-2 mb-2 rounded-sm p-1.5 cursor-pointer hover:scale-110 transition-transform'>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default ProductCard
