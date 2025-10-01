import Home from './components/Home/Home'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Header />

    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      

      <Footer />
    </>
  )
}

export default App
