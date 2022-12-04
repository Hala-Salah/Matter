import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import styles from "./styles.module.css";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

const RightFooterItems = () => {
  const [email, setEmail] = useState("");
  return (
    <Col lg="6" className={styles.input}>
      <hr />
      <h1 className={styles.footerTitle}>Subscribe to newsletter</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.footerEmail}
        placeholder={"Enter Your Email"}
      />
      <button className={styles.footerButton}>Subscribe</button>
      <br />
      <RiFacebookCircleFill className={styles.footerIcon}/>
      <AiFillTwitterCircle className={styles.footerIcon}/>
    </Col>
  );
};

export default RightFooterItems;
