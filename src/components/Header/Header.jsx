import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { TbShoppingCart } from 'react-icons/tb'
import CartContext from '../../contexts/CartContext'

function Header() {
  const location = useLocation()
  const { viewItems } = useContext(CartContext)

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
        <div
          className={`h-full w-24 flex items-center justify-center px-4 bg-linear-to-b from-transparent from-55% ${
            location.pathname === 'fwfe'
              ? 'to-indigo-500'
              : 'to-transparent hover:to-indigo-500'
          }`}
          href='#'
        >
          Offers
        </div>
        <a
          className={`h-full w-24 flex items-center justify-center px-4 bg-linear-to-b from-transparent from-55% ${
            location.pathname === 'fwefwe'
              ? 'to-indigo-500'
              : 'to-transparent hover:to-indigo-500'
          }`}
          href='#'
        >
          Contact
        </a>
      </nav>
      <div className='flex gap-2'>
        <Link to='/cart'>
          <div className='relative group'>
            <TbShoppingCart size={32} className='cursor-pointer' />
            {viewItems.length === 0 ? null : (
              <div className='absolute bg-white text-black size-4 flex rounded-full font-bold items-center justify-center  -top-3 -right-1'>
                {viewItems.length}
              </div>
            )}
            <div className='absolute hidden group-hover:block left-1/2 -translate-x-1/2 w-20'>
            <ul className='mt-5 divide-y'>
              {viewItems.map((p) => (
                <li>
                  <img src={p.img} alt=''/>
                  {p.name}
                </li>
              ))}
            </ul>
            </div>
          </div>
        </Link>
        <IoPersonCircleSharp size={32} className='cursor-pointer' />
      </div>
      <GiHamburgerMenu className='md:hidden' size={32} />
    </header>
  )
}

export default Header
