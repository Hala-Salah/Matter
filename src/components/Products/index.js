import React, {useContext} from "react";
import {ProductsContext} from "../../App.js"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "./ProductCard";
import styles from './styles.module.css'

const Products = () => {
  const productsData = useContext(ProductsContext);
  if (productsData) {
    return (
      <Container className={styles.productsWrapper}>
        <Row>
          {productsData.map((productItem) => {
            return (
              <ProductCard{...productItem} key={productItem.id}/>
            );
          })}
        </Row>
      </Container>
    );
  }
  return <></>;
};

export default Products;
