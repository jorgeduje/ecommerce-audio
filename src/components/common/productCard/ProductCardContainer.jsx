import ProductCard from './ProductCard'
import Loading from '../loading/Loading'

const ProductCardContainer = ({product, index}) => {
  if(!product){
    return <Loading />
  }
  return (
    <ProductCard product={product} index={index}/>
  )
}

export default ProductCardContainer