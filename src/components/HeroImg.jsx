function HeroImg() {
  return (
    <div className='relative -mt-16 justify-center'>
      <img
        className='w-screen h-screen object-cover'
        src='/herolargecopy.png'
        alt='pc and peripherals like pc and mouse'
      />
      <div className='absolute md:top-64 md:left-44 flex flex-col gap-4 bottom-35'>
        <h1 className='text-3xl font-bold text-white'>Discover your new PC</h1>
        <button className='text-white p-3 border-white border-1 rounded-md cursor-pointer hover:bg-gray-950'>
          Learn more
        </button>
      </div>
    </div>
  )
}

export default HeroImg
