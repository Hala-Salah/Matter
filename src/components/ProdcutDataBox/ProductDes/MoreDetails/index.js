import React, { useState } from "react";
import styles from "./styles.module.css";
const MoreDetails = (props) => {

  const [showMore, setShowMore] = useState(false);
  return (
    <div className={styles.MoreDetails}>
      <div className={styles.titleDiv}>
        <h1>{props.title}</h1>
      </div>
      <div>
        {props.title === "Description" ? (
          <p>
            {showMore ? props.des: `${props.des.substring(0, 110)}`}
            <button onClick={()=>setShowMore(!showMore)} className={styles.showMoreButton}>
              {showMore ? "Show less" : "...Show more"}
            </button>
          </p>
        ) : (
          <p>{props.des}</p>
        )}
      </div>
    </div>
  );
};

export default MoreDetails;
