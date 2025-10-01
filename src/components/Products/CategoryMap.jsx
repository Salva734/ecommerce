import { FaAngleDown } from "react-icons/fa";

function CategoryMap({ setSelectedCategory }) {
  const Categories = [
    {
      name: 'Parts',
      options: [
        { name: 'Graphic cards', id: 1 },
        { name: 'Processors', id: 2 },
      ],
    },
  ]

  return (
    <>
      {Categories.map((category) => (
        <div className='group p-2 cursor-pointer hover:bg-[#222222] w-full'>
          <div className="flex justify-between items-center">
          <h3 className='font-bold text-xl'>{category.name}</h3>
          <FaAngleDown size={24}/>
          </div>
          <ul className='text-[#888888] hidden group-hover:block'>
            {category.options.map((option) => (
              <li
                className='hover:underline cursor-pointer'
                onClick={() => {
                  setSelectedCategory(option.id)
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default CategoryMap
