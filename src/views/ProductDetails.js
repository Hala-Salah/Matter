import React from 'react'
import { useParams } from "react-router-dom";

const ProductDetails = () => {
const {Product}=useParams();
console.log(Product)
  return (
    <div>ProductId</div>
  )
}

export default ProductDetails