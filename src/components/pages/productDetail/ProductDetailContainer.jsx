// import React from 'react'
import { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail'
import axios from 'axios';

const ProductDetailContainer = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        axios.get("http://localhost:5000/products")
        .then(res =>{
            setData(res.data)
        })
        .catch(error => {
            console.error(error)
        })
      }, []);

  return (
    <ProductDetail data={data}/>
  )
}

export default ProductDetailContainer