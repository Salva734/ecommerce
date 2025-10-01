import CardMap from '../Home/CardMap'
import CategoryMap from './CategoryMap'
import { FaFilter } from "react-icons/fa6";
import { useState } from 'react'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className='bg-black min-h-screen -mt-16 text-white'>
      <div className='h-16 text-black'></div>
      <div className='flex w-full'>

        <div className='flex w-1/7 items-center gap-4 bg-[#111111]  m-4 flex-col'>
          <div className='flex p-4 justify-between w-full text-2xl font-bold'><h3>Filters</h3><FaFilter /></div>
          <CategoryMap setSelectedCategory={setSelectedCategory}/>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full p-4 gap-6'>
          <CardMap category={selectedCategory} />
        </div>
      </div>
    </div>
  )
}

export default Products
