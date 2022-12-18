import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "./ProductCard";
import styles from './styles.module.css'

const Products = (props) => {
if(props.productsData) {   return (
      <Container className={styles.productsWrapper}>
        <Row>
          {props.productsData.map((productItem) => {
            return (
              <ProductCard{...productItem} key={productItem.id}/>
            );
          })}
        </Row>
      </Container>
    );}
  
  
};

export default Products;
