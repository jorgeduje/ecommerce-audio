// import React from 'react'
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

import { useParams } from "react-router-dom";
import Loading from "../../common/loading/Loading";
import { addToCart } from "../../../store/cart/cartSlice";
import { useDispatch } from "react-redux";
import { getProductById } from "../../../services/products";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const [open, setOpen] = useState(false);

 

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getProductById(id)
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
    setOpen(true);
  };

  return (
    <div>
      {!product ? (
        <Loading />
      ) : (
        <ProductDetail
          onAdd={onAdd}
          product={product}
          open={open}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default ProductDetailContainer;
