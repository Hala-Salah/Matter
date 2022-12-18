import React from "react";
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

const CategoryHeader = (props) => {
  const category = props.categoryName;
  const OneImage= props.ProductData;
  if (OneImage) {
    const CategoryImage = OneImage.find(
      (image) => image.category === category
    );
    return (
      <>
        <Container fluid>
          <Row className={`justify-content-center ${styles.CategoryHeader}`}>
            <Col lg={{ span: 6, offset: 2 }} className={styles.categoryTitle}>
              <h1>{category}</h1>
            </Col>
            <Col xs lg="5" className={styles.categoryImage}>
              <img src={CategoryImage.image} alt={category} />
            </Col>
          </Row>
        </Container>
        <div className={styles.whiteSection}>
          <div className={styles.caName}>
            <h1>{category}</h1>
          </div>
          <div className={styles.sort}>
            <h1>Sort by</h1>
            <Dropdown>
              <Dropdown.Toggle className={styles.sortButton}>
               Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Price</Dropdown.Item>
                <Dropdown.Item>Name</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </>
    );
  }

  return <div>{category}</div>;
};

export default CategoryHeader;
