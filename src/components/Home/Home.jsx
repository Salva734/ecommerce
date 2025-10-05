import HeroImg from './HeroImg'
import ProductCard from '../Shared/ProductCard'
import CategoryContainer from './CategoryContainer'

function Home() {
  return (
    <>
      <HeroImg />
      <CategoryContainer />
      <ProductCard title='Get the new RTX 50 Series' category={[1,2]} limit={5} />
      <ProductCard title='The best of Intel' category={2} limit={5}/>
    </>
  )
}

export default Home
