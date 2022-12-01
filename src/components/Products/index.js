import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "./ProductCard";
import styles from './styles.module.css'

const Products = () => {
  const url = "https://fakestoreapi.com/products?limit=8";

  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [url]);
  
  if (products) {
    return (
      <Container className={styles.productsWrapper}>
        <Row>
          {products.map((productItem) => {
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
