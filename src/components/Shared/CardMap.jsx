import { useEffect, useState } from 'react'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'


function CardMap({ category, limit, brand }) {
  const [products, setProducts] = useState([])
  const Navigate = useNavigate()

  useEffect(() => {
    let url = `http://localhost:3000/?`
    if (category) url += `category=${category}&`
    if (limit) url += `limit=${limit}&`
    if (brand) url += `brand=${brand}&`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [category, limit, brand])

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className='w-3xs min-w-3xs bg-[#222222] flex flex-col items-center'
        >
          <div className='w-full h-full mb-3 flex items-center justify-center bg-[#111111] cursor-pointer'>
            <img
              className='w-full h-full object-cover p-2'
              src={product.img}
              alt={product.name}
              onClick={() => {
                Navigate(`/products/${product.id}`)
              }}
            />
          </div>
          <h4 className='text-lg font-semibold mb-1 text-center'>
            {product.name}
          </h4>
          <span className='font-bold text-base mb-1'>${product.price}</span>
          <button className='bg-[#111111] hover:bg-black transition-colors mb-2 p-1.5 cursor-pointer'>
            <TbShoppingCartPlus size={24} />
          </button>
        </div>
      ))}
    </>
  )
}

export default CardMap
