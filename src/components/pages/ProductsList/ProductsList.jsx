import styles from "./ProductList.module.css";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";

const ProductsList = ({ items }) => {
  console.log(items)
  return (
    <div className={styles.categoryContainer}>
      {items.map((product, i) => (
        <ProductCardContainer product={product} key={product.id} index={i} show={true}/>
      ))}
    </div>
  );
};

export default ProductsList;
