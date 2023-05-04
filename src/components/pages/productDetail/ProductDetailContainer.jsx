// import React from 'react'
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../common/loading/Loading";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setTimeout(() => {
          setProduct(res.data);
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // if(!product){
  //   return <h1>Cargando......</h1>
  // }

  return (
    <div>
      { !product ? <Loading /> : <ProductDetail product={product} />}
    </div>
  );
};

export default ProductDetailContainer;
