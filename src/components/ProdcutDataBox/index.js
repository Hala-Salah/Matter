import React, { useContext } from "react";
import { ProductsContext } from "../../App.js";
import BoxHeader from "./BoxHeader/index.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./styles.module.css";
import ProductDes from "./ProductDes/index.js";

const ProductData = ({ id, close }) => {
  const productsData = useContext(ProductsContext);
  const viewedProduct = productsData.find((IDProduct) => IDProduct.id === id);

  return (
    <>
      {/* <BoxHeader productTitle={viewedProduct.title} close={close} /> */}
      <Container>
        <Row className={styles.body}>
          <ProductDes
            title={viewedProduct.title}
            price={viewedProduct.price}
            description={viewedProduct.description}
            category={viewedProduct.category}
            rating={viewedProduct.rating.rate}
            image={viewedProduct.image}
          />
        </Row>
        
      </Container>
    </>
  );
};

export default ProductData;
