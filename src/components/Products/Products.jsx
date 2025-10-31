import CardMap from '../Shared/CardMap'
import CategoryMap from './CategoryMap'
import { FaFilter } from 'react-icons/fa6'
import useFilter from '../../Hooks/useFilter'
import { Parts, Brands } from '../../assets/filters'

function Products() {
  const { filter: partsFilter, toggleFilter } = useFilter('category')
  const { filter: brandsFilter, toggleFilter: toggleBrand } = useFilter('brand')

  return (
    <div className='bg-black min-h-screen -mt-16 text-white'>
      <div className='h-16 text-black'></div>

      {/*Div that contains filters and products */}
      <div className='flex w-full'>
        {/*Left part that shows filters */}
        <div className='flex w-1/7 items-center gap-4 bg-[#111111]  m-4 flex-col'>
          <div className='flex p-4 justify-between w-full text-2xl font-bold'>
            <h3>Filters</h3>
            <FaFilter />
          </div>
          <CategoryMap
            toggleFilter={toggleFilter}
            partsFilter={partsFilter}
            category={Parts}
            title='Parts'
          />

          <CategoryMap
            toggleFilter={toggleBrand}
            partsFilter={brandsFilter}
            category={Brands}
            title='Brands'
          />
        </div>

        {/*Right part that shows products */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full p-4 gap-6'>
          <CardMap category={partsFilter} brand={brandsFilter} discount={false} />
        </div>
      </div>
    </div>
  )
}

export default Products
