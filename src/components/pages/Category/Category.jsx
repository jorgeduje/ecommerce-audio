import ProductCardContainer from "../../common/productCard/ProductCardContainer";
import styles from './Category.module.css'

const Category = () => {
  return (
    <div className={styles.categoryContainer}>
      <ProductCardContainer />
    </div>
  );
};

export default Category;
