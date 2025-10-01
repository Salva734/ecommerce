import icons from '../../assets/svgs'

function CategoryContainer() {
  return (
    <>
    <div className='bg-black flex justify-center items-center text-white pt-6'>
      <h1 className='font-bold text-3xl'>Looking for something?</h1>
    </div>
      <div className='grid grid-cols-2 md:grid-cols-8 bg-black text-white font-bold text-xl gap-8 p-8'>
        {icons.map((icon, i) => (
          <div key={i} className='aspect-square bg-[#111111] flex justify-center items-center flex-col max-h-40 p-6 cursor-pointer hover:scale-110 transition-transform'>
            <icon.icon size={128} fill='white' />
            {icon.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default CategoryContainer
