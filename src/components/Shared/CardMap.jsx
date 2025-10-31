import { useEffect, useState, useContext } from 'react'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../contexts/CartContext'
import PriceCalculator from '../Shared/PriceCalculator'

function CardMap({ category, limit, brand, discount }) {
  const [products, setProducts] = useState([])
  const Navigate = useNavigate()
  const { setCartItems } = useContext(CartContext)

  useEffect(() => {
    const url = new URL('http://localhost:3000/')
    if (category) url.searchParams.append('category', category)
    if (limit) url.searchParams.append('limit', limit)
    if (brand) url.searchParams.append('brand', brand)
      if (discount) url.searchParams.append('discount', 'true')
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [category, limit, brand, discount])

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className='relative w-3xs min-w-3xs bg-[#222222] flex flex-col items-center'
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
          <PriceCalculator price={product.price} discount={product.discount}/>
          <button className='bg-[#111111] hover:bg-black transition-colors mb-2 p-1.5 cursor-pointer'>
            <TbShoppingCartPlus
              size={24}
              onClick={() => {
                setCartItems(product.id)
              }}
            />
          </button>
          {product.discount && (
            <div className='absolute bg-red-600 left-0 top-0'>
              {product.discount}% OFF
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default CardMap
