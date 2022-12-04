import React from "react";
import styles from "./styles.module.css";
import Col from "react-bootstrap/Col";

const footerData = [
  {
    id: 0,
    title: "Categories",
    items: ["About us", "Testimonials", "Contact", "Journal", "Privacy Policy"],
  },
  {
    id: 1,
    title: "Partners ",
    items: ["Support", "Shipping & Returns", "Size Guide ", " Product Care"],
  },
  {
    id: 2,
    title: "Contact us ",
    items: [
      "  26A Pagoda St, TANGS ",
      " Singapore, 058187",
      " ",
      "+65 6221 5462",
    ],
  },
];
const LeftFooterItems = () => {
  return (
    <>
      {footerData.map((title, id) => (
        <Col xs lg="2" key={title.id}>
          <h1 className={styles.footerTitle}>{title.title}</h1>
          {title.items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Col>
      ))}
    </>
  );
};

export default LeftFooterItems;
