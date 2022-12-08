import React, { useState } from "react";
import styles from "./styles.module.css";

const Quantity = () => {
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter > 1 ? counter - 1 : counter);
    console.log(counter)
  };
  return (
    <div className={styles.quantityDiv}>
      <h1 className={styles.quantityTitle}>QUANTITY</h1>
      <div className={styles.counter}>
        <button onClick={handleDecrement} className={styles.addDeleteCounterButton}>-</button>
        <div className={styles.numberCounter}>
          {" "}
          <p>{counter}</p>
        </div>
        <button onClick={handleIncrement} className={styles.addDeleteCounterButton}>+</button>
      </div>
    </div>
  );
};

export default Quantity;
