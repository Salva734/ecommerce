import products from '../../assets/products'
import { TbShoppingCartPlus } from "react-icons/tb";

function CardMap({category}) {

let list = ''
if (category !== null){
  list = products.filter(product => product.category === category)
}
else{
  list = products
}

  return (
    <>
      {list.map(product => (
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
        <button className='bg-[#111111] hover:bg-black transition-colors mb-2 p-1.5 cursor-pointer'>
          <TbShoppingCartPlus size={24}/>
        </button>
      </div>
    ))}
    </>
  )
}

export default CardMap
