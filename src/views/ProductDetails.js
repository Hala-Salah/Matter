import React , {useContext} from 'react'
import { useParams } from "react-router-dom";
import DetailsPage from '../components/DetailsPage';
import {ProductsContext} from '../App'

const ProductDetails = () => {
const {Product}=useParams();
const productsData = useContext(ProductsContext);
const viewedProduct = productsData?.find(
  (IDProduct) => IDProduct.id == Product
);
console.log(viewedProduct)
console.log(Product)
  return (
    <>
    <DetailsPage viewedProduct={viewedProduct}/>
    </>
  )
}

export default ProductDetails