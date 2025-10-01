import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <header className='bg-black/50 h-16 text-white flex items-center sticky top-0 z-50 px-6 justify-between'>
      <h4>Header</h4>
      <nav className='hidden md:flex h-full'>
        <Link
          className={`h-full w-24 flex items-center justify-center px-4 bg-linear-to-b from-transparent from-55% ${
            location.pathname === '/'
              ? 'to-indigo-500'
              : 'to-transparent hover:to-indigo-500'
          }`}
          to='/'
        >
          Home
        </Link>
        <Link
          className={`h-full w-24 flex items-center justify-center px-4 bg-linear-to-b from-transparent from-55% ${
            location.pathname === '/products'
              ? 'to-indigo-500'
              : 'to-transparent hover:to-indigo-500'
          }`}
          to='/products'
        >
          Products
        </Link>
        <a
          className={`h-full w-24 flex items-center justify-center px-4 bg-linear-to-b from-transparent from-55% ${
            location.pathname === 'fwfe'
              ? 'to-indigo-500'
              : 'to-transparent hover:to-indigo-500'
          }`}
          href='#'
        >
          Echito
        </a>
        <a
          className={`h-full w-24 flex items-center justify-center px-4 bg-linear-to-b from-transparent from-55% ${
            location.pathname === 'fwefwe'
              ? 'to-indigo-500'
              : 'to-transparent hover:to-indigo-500'
          }`}
          href='#'
        >
          Alfredo
        </a>
      </nav>
    </header>
  )
}

export default Header
