import CardMap from './CardMap'

function ProductCard({title, category, limit, brand}) {
  return (
    <div className='bg-black text-white flex flex-col py-6'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold py-6'>
          {title}
        </h1>
      </div>
  <div className='flex gap-6 md:justify-center bg-black flex-nowrap overflow-x-auto px-6 md:px-0 scrollbar-hide'>
    <CardMap category={category} limit={limit} brand={brand}/>
  </div>
      
    </div>
  )
}

export default ProductCard
