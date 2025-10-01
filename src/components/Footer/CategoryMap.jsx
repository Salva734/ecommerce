function CategoryMap() {
  const categories = [
    {
      name: 'About',
      options: [
        {
          name: 'About us',
          ref: '#'
        },
        {
          name: 'About our products',
          ref: '#'
        }
      ],
    },
    {
      name: 'Socials',
      options: [
        {
          name: 'Facebook',
          ref: '#'
        },
        {
          name: 'Instagram',
          ref: '#'
        }
      ],
    }
  ]

  return (
    <>
      {categories.map((category) => (
        <div key={category.name} className='text-[#666666] flex flex-col'>
          <h4 className='text-white font-bold text-2xl'>{category.name}</h4>
          <ul>
            {category.options.map((option) => (
              <li key={option.name}>
                <a
                  className='hover:text-white hover:underline'
                  href={option.ref}
                >
                  {option.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default CategoryMap
