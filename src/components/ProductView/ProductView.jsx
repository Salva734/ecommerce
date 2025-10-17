import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import Button from '../Shared/Button'
import ProductCard from '../Shared/ProductCard'

function ProductView() {
  const { id } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [id])

  return (
    <>
      <div className='bg-black h-screen -mt-16 pt-24 p-8 text-white flex gap-4'>
        <img src={product.img} alt='' className='size-128 bg-[#111111]' />

        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-6xl'>{product.name}</h1>
            <ul className='flex gap-4'>
              <li>Brand: {product.brand}</li>
              <li>
                Available:{' '}
                <span
                  className={`${
                    product.stock > 10
                      ? ``
                      : `text-red-600 underline underline-offset-2`
                  }`}
                >
                  {product.stock === 0
                    ? `Out of stock`
                    : product.stock > 10
                    ? `On stock`
                    : `Only ${product.stock} left`}
                </span>
              </li>
              <li className='flex justify-center items-center'>
                Rating: {product.rating}
                <FaStar />
              </li>
            </ul>
            <span>{product.description}</span>
          </div>
          {/*Bottom section */}
          <div className='flex flex-col items-center gap-4 pb-14'>
            <h3 className='text-3xl'>${product.price}</h3>
            <Button title='Add to cart' w='w-full' />
          </div>
        </div>
      </div>
      {/*Related products */}
      <ProductCard title='Related products' limit={5} category={product.category} brand={product.brand}/>
    </>
  )
}

export default ProductView
