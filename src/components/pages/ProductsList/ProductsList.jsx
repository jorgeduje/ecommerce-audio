import { useEffect, useState } from "react";
import { products } from "../../../db/productsMock";

const ProductsList = ({ id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id) {
      const arrFiltrado = products.filter(
        (elemento) => elemento.category === id
      );
      setItems(arrFiltrado);
    } else {
      setItems(products);
    }
  }, [id]);

  return (
    <div>
      <h1>Productos</h1>
      {
        items.map( e => <h1 key={e.id}>{e.name}</h1>)
      }
    </div>
  );
};

export default ProductsList;
