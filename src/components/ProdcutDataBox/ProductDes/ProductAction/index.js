import React from "react";
import SharedButton from "../../../SharedButton";
import Quantity from "../../Quantity";
import styles from "./styles.module.css";
import { BiQuestionMark } from "react-icons/bi";

const ProductAction = () => {
  return (
    <div className={styles.ProductAction}>
      <Quantity />
      <div className={styles.AddButton}>
        <SharedButton buttonLabel={"Add to cart"} />
      </div>
      <div className={styles.addToWishList}>
        <BiQuestionMark className={styles.questionIcon}></BiQuestionMark>
        <h1>Add to wishlist</h1>
      </div>
    </div>
  );
};

export default ProductAction;
