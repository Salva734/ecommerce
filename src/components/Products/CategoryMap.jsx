import { FaAngleDown } from 'react-icons/fa'

function CategoryMap({ partsFilter, toggleFilter, category, title = 'Category' }) {

  return (
    <div className='group p-2 cursor-pointer hover:bg-[#222222] w-full'>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-xl'>{title}</h3>
        <FaAngleDown size={24} />
      </div>
      <ul className='text-[#888888] hidden group-hover:block'>
        {category.map((option) => (
          <li
            key={option.id}
            className={`hover:underline cursor-pointer ${
              partsFilter.includes(option.id) ? 'text-white' : null
            }`}
            onClick={() => toggleFilter(option.id)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryMap
