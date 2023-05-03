import styles from "./ProductList.module.css";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";

const ProductsList = ({ items }) => {
  return (
    <div className={styles.categoryContainer}>
      <h1>Productos</h1>
      {items.map((product, i) => (
        <ProductCardContainer product={product} key={product.id} index={i}/>
      ))}
    </div>
  );
};

export default ProductsList;
