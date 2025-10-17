import { useEffect, useState, useContext } from 'react'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../contexts/CartContext'


function CardMap({ category, limit, brand }) {
  const [products, setProducts] = useState([])
  const Navigate = useNavigate()
  const { setCartItems } = useContext(CartContext)

  useEffect(() => {
    const url = new URL('http://localhost:3000/')
    if (category) url.searchParams.append('category', category)
    if (limit) url.searchParams.append('limit', limit)
    if (brand) url.searchParams.append('brand', brand)
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
          <div className='w-full h-full max-h-64 mb-3 flex items-center justify-center bg-[#111111] cursor-pointer'>
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
            <TbShoppingCartPlus size={24} onClick={()=>{setCartItems(product.id)}}/>
          </button>
        </div>
      ))}
    </>
  )
}

export default CardMap
