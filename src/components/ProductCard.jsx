import products from '../assets/products'

function ProductCard({title, category}) {
  return (
    <div className='bg-black text-white flex flex-col py-6'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold py-6'>
          {title}
        </h1>
      </div>
  <div className='flex gap-6 md:justify-center bg-black flex-nowrap overflow-x-auto px-6 md:px-0 scrollbar-hide'>
    {products.filter(product => product.category === category).map(product => (
      <div
        key={product.id}
        className='w-3xs min-w-3xs bg-[#222222] flex flex-col items-center cursor-pointer'
      >
        <div className='w-full h-full mb-3 flex items-center justify-center bg-[#111111]'>
          <img
            className='w-full h-full object-cover p-2'
            src={product.img}
            alt={product.name}
          />
        </div>
        <h4 className='text-lg font-semibold mb-1 text-center'>
          {product.name}
        </h4>
        <span className='font-bold text-base mb-1'>${product.price}</span>
        <button className='border-2 mb-2 rounded-sm p-1.5 cursor-pointer'>
          Add to Cart
        </button>
      </div>
    ))}
  </div>
      
    </div>
  )
}

export default ProductCard
