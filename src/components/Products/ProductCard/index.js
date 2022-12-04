import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import styles from "./styles.module.css";
import Card from "react-bootstrap/Card";
import SharedButton from "../../SharedButton";
import CardDes from "./CardDes";
import ProductModal from "../../ProductModal";

const ProductCard = ({ id, title, image, price }) => {
  const [openModal, setOpenModal] = useState(false);
  const onClickQuickView = (id) => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal && <ProductModal productID={id} />}
      <Col xl="3" lg="4" md="4" sm="5" key={id}>
        <Card className={styles.productCard}>
          <div className={styles.imageDiv}>
            <Card.Img variant="top" src={image} className={styles.cardImage} />
          </div>
          <CardDes title={title} price={price} />

          <div className={styles.QuickButton}>
            <SharedButton
              buttonLabel={"Quick View"}
              onCLickButton={() => onClickQuickView(id)}
            />
          </div>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
