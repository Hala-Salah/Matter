import React, { useContext } from "react";
import { ProductsContext } from "../../../App";
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CategoryHeader = (props) => {
  const category = props.categoryName;
  const ProductData = useContext(ProductsContext);
  if (ProductData) {
    const CategoryImage = ProductData.find(
      (image) => image.category === category
    );
    return (
      <>
        <Container fluid >
          <Row className={`justify-content-center ${styles.CategoryHeader}`}>
            <Col lg={{ span: 6, offset: 2}} className={styles.categoryTitle}>
              <h1>{category}</h1>
            </Col>
            <Col xs lg="5" className={styles.categoryImage}>
            <img src={CategoryImage.image} alt={category} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return <div>{category}</div>;
};

export default CategoryHeader;
