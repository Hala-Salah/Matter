import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductDes from '../ProdcutDataBox/ProductDes';
import styles from './styles.module.css'
const DePage = (props) => {
  console.log(props.viewedProduct)
  return (
   <><Container className={styles.co}>
   <Row>

     <ProductDes
       title={props.viewedProduct.title}
       price={props.viewedProduct.price}
       description={props.viewedProduct.description}
       category={props.viewedProduct.category}
       rating={props.viewedProduct.rating.rate}
       image={props.viewedProduct.image}
     />
   </Row>
 </Container></>
  )
}

export default DePage