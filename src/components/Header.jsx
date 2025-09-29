function Header() {
  return (
    <header className='bg-black/50 h-16 text-white flex items-center sticky top-0 z-50 px-6 justify-between'>
      <h4>Header</h4>
      <nav className="hidden md:flex gap-2 h-full">
        <a className="bg-linear-to-b from-transparent from-55% to-indigo-500 hover:to-blue-500 h-full flex items-center px-4" href=''>Home</a>
        <a className="h-full flex items-center px-4" href=''>Guineo</a>
        <a className="h-full flex items-center px-4" href=''>Echito</a>
        <a className="h-full flex items-center px-4" href=''>Alfredo</a>
      </nav>
    </header>
  )
}

export default Header
