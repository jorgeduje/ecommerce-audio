import axios from "axios";
import { useEffect, useState } from "react";


const ProductsList = ({ categoryName }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {

    const data = axios.get("http://localhost:5000/products")
   
    data.then(res => {
      if (categoryName) {
        const arrFiltrado = res.data.filter(
          (elemento) => elemento.category === categoryName
        );
        setItems(arrFiltrado);
      } else {
        setItems(res.data);
      }
    })

    
  }, [categoryName]);

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
