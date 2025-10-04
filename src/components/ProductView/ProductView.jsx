import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

function ProductView() {
  const {id} = useParams()
  const [product, setProduct] = useState([])

  useEffect(()=>{fetch(`http://localhost:3000/${id}`)
  .then(res => res.json())
  .then(data => setProduct(data))},[id])

  return (
    <div>

     <div className='bg-black h-screen -mt-16 pt-16'>
      <img src={product.img} alt="" className='size-64'/>
     </div>
    </div>
    
  )
}

export default ProductView
