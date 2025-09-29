import './App.css'
import HeroImg from './components/HeroImg'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import CategoryContainer from './components/CategoryContainer'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <HeroImg/>
    <CategoryContainer/>
    <ProductCard title='Get the new RTX 50 Series' category={1}/>
    <ProductCard title='The best of Intel' category={2}/>
    <Footer/>
    </>
  )
}

export default App
