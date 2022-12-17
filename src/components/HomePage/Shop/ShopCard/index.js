import React from "react";
import Col from "react-bootstrap/Col";
import SharedButton from "../../../SharedButton";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const ShopCard = (props) => {
  return (
    <>
      <Col xl="3" lg="4" md="4" sm="5" className={styles.shopCard}>
        {" "}
        <div className={styles.imageDiv}>
          <img
            src={props.image}
            className={styles.cardImage}
            alt={props.category}
          />
          <div className={styles.categoryName}>
            <h1>{props.category}</h1>
          </div>
          <div className={styles.shopNow}>
            <Link to={props.category}>
              <SharedButton buttonLabel={"shop now"} />
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ShopCard;
