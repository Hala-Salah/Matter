import React from "react";
import styles from "./styles.module.css";
import Col from "react-bootstrap/Col";
import MoreDetails from "./MoreDetails";
import Rating from "./Rating";
import ProductAction from "./ProductAction";
import ProductImage from "../ProductImage";

const ProductDes = (props) => {
  return (
    <>
      <ProductImage image={props.image} />
      <Col>
        <div>
          <h1 className={styles.productName}>{props.title}</h1>
          <div className={styles.PriceRating}>
            <div className={styles.price}>SGD {props.price}</div>
            <div>
              <Rating rating={props.rating} />
            </div>
          </div>
          <MoreDetails title={"Description"} des={props.description} />
          <MoreDetails title={"Category"} des={props.category} />
          <MoreDetails title={"Artisan Employment"} des={"54 jobs"} />
          <MoreDetails title={"Partnership"} des={"Randall Armstrong"} />
        </div>

        <ProductAction />
      </Col>
    </>
  );
};

export default ProductDes;
