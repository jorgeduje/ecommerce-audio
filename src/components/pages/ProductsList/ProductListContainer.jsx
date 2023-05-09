import axios from "axios";
import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import Loading from "../../common/loading/Loading";

const ProductListContainer = ({ categoryName }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = axios.get("http://3.21.158.170/products");

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

  if (!items) {
    return <Loading />;
  }

  return <ProductsList items={items} />;
};

export default ProductListContainer;
