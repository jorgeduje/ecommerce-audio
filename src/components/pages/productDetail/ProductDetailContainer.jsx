// import React from 'react'
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../common/loading/Loading";
import { addToCart } from "../../../store/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const onAdd = (cantidad) => {
    let obj = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: cantidad,
    };
    dispatch(addToCart(obj));
  };

  return (
    <div>
      {!product ? (
        <Loading />
      ) : (
        <ProductDetail onAdd={onAdd} product={product} />
      )}
    </div>
  );
};

export default ProductDetailContainer;
