import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import ProductView from './components/ProductView/ProductView'
import Cart from './components/Cart/Cart'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductView/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
