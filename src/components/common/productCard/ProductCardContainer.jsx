import ProductCard from './ProductCard'
import Loading from '../loading/Loading'

const ProductCardContainer = ({product, index, show}) => {
  if(!product){
    return <Loading />
  }
  return (
    <ProductCard product={product} index={index} show={show}/>
  )
}

export default ProductCardContainer