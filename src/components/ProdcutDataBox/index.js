import React, { useContext } from "react";
import { ProductsContext } from "../../App.js";
import BoxHeader from "./BoxHeader/index.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./styles.module.css";
import ProductImage from "./ProductImage/index.js";
import ProductDes from "./ProductDes/index.js";
import Quantity from "./Quantity/index.js";

const ProductData = ({ id }) => {
  const productsData = useContext(ProductsContext);
  const viewedProduct = productsData.find((IDProduct) => IDProduct.id === id);

  return (
    <>
      <BoxHeader />
      <Container>
        <Row>
          <ProductImage image={viewedProduct.image} />

          <ProductDes
            title={viewedProduct.title}
            price={viewedProduct.price}
            description={viewedProduct.description}
            category={viewedProduct.category}
          />
          
        </Row>
      </Container>
    </>
  );
};

export default ProductData;
