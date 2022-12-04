import React from "react";
import styles from "./styles.module.css";
import Col from "react-bootstrap/Col";
import MoreDetails from "./MoreDetails";

const ProductDes = (props) => {
  return (
    <Col>
      <div>
        <h1 className={styles.productName}>{props.title}</h1>
        <div className={styles.PriceRating}>
            <div className={styles.price}>SGD {props.price}</div>
            <div></div>
        
        </div>
        <MoreDetails title={"Description"} des={props.description}/>
        <MoreDetails title={"Category"} des={props.category}/>
   </div>
    </Col>
  );
};

export default ProductDes;
