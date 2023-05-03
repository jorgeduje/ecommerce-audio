import ProductCard from './ProductCard'
import Loading from '../loading/Loading'

const ProductCardContainer = ({product}) => {
  if(!product){
    return <Loading />
  }
  return (
    <ProductCard product={product}/>
  )
}

export default ProductCardContainer