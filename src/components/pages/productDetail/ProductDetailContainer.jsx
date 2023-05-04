// import React from 'react'
import { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetailContainer = () => {

    const [product, setproduct] = useState('')
    const {id} = useParams()
    
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
        .then(res =>{
            setproduct(res.data)
        })
        .catch(error => {
            console.error(error)
        })
      }, [id]);

  return (
    <ProductDetail product={product}/>
  )
}

export default ProductDetailContainer