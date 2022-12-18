import React, { useContext } from "react";
import { ProductsContext } from "../../App.js";
import BoxHeader from "./BoxHeader/index.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./styles.module.css";
import ProductImage from "./ProductImage/index.js";
import ProductDes from "./ProductDes/index.js";
import SharedButton from "../SharedButton/index.js";

const ProductData = ({ id, close }) => {
  const productsData = useContext(ProductsContext);
  const viewedProduct = productsData.find((IDProduct) => IDProduct.id === id);

  return (
    <>
      <BoxHeader productTitle={viewedProduct.title} close={close} />
      <Container>
        <Row className={styles.body}>
          <ProductImage image={viewedProduct.image} />

          <ProductDes
            title={viewedProduct.title}
            price={viewedProduct.price}
            description={viewedProduct.description}
            category={viewedProduct.category}
            rating={viewedProduct.rating.rate}
          />
        </Row>
        
      </Container>
    </>
  );
};

export default ProductData;
