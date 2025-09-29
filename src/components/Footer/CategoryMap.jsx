function CategoryMap() {
  const categories = [
    {
      name: 'About',
      options: ['About us', 'About our products'],
    },
  ]

  return (
    <>
      {categories.map((category) => (
        <div key={category.name} className='text-[#666666] flex flex-col'>
          <h4 className='text-white font-bold text-2xl'>{category.name}</h4>
          {category.options.map((option) => (
            <a key={option} href='#'>
              {option}
            </a>
          ))}
        </div>
      ))}
    </>
  )
}

export default CategoryMap
