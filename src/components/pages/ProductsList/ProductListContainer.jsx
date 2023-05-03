import axios from "axios";
import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const ProductListContainer = ({ categoryName }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = axios.get("http://localhost:5000/products");

    data.then((res) => {
      if (categoryName) {
        const arrFiltrado = res.data.filter(
          (elemento) => elemento.category === categoryName
        );
        setItems(arrFiltrado);
      } else {
        setItems(res.data);
      }
    });
  }, [categoryName]);

  return <ProductsList items={items} />;
};

export default ProductListContainer;
