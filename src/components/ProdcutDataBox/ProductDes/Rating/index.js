import React from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./styles.module.css";

const Rating = (props) => {
  return (
    <div className={styles.ratingSection}>
      <ReactStars
        count={5}
        size={20}
        value={props.rating}
        activeColor="#FF6008"
        isHalf={true}
      />
      <h1>{props.rating} of 5</h1>
    </div>
  );
};

export default Rating;
