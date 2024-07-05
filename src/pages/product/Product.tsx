import Single from '../../componenets/single/Single'
import { singleProduct } from '../../data'
import './product.scss'

const Product = () => {
  return (
    <div className='Product'>
        <Single {...singleProduct}/>
    </div>
  )
}

export default Product