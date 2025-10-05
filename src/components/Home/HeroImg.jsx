import Button from '../Shared/Button'

function HeroImg() {
  return (
    <div className='relative -mt-16 justify-center'>
      <img
        className='w-screen h-screen object-cover'
        src='/herolargecopy.png'
        alt='pc and peripherals like pc and mouse'
      />
      <div className='absolute md:top-64 md:left-44 flex flex-col gap-4 bottom-35 left-1/2 md:-translate-x-0 -translate-x-1/2 min-w-2xs'>
        <h1 className='text-3xl font-bold text-white text-center'>BUILD YOUR DREAM PC NOW</h1>
        <Button title='START BUILDING'/>
      </div>
    </div>
  )
}

export default HeroImg
