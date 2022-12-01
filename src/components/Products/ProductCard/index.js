import React , {useState}from "react";
import Col from "react-bootstrap/Col";
import styles from "./styles.module.css";
import Card from "react-bootstrap/Card";
import SharedButton from "../../SharedButton";


const ProductCard = ({ id, title, image, price }) => {
  const [openModal , setOpenModal]=useState(false);
  const onClickQuickView=(id)=>{
    console.log(id);
    setOpenModal(!openModal);
  }
  return (
    <Col xl="3" lg="4" md="4" sm="5" key={id}>
      <Card className={styles.productCard}>
        <div className={styles.imageDiv}>
          {" "}
          <Card.Img variant="top" src={image} className={styles.cardImage} />
        </div>
        <Card.Body>
          <Card.Title className={styles.cardTitle}>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
        <div className={styles.QuickButton}>
          <SharedButton buttonLabel={"Quick View"} onCLickButton={()=>onClickQuickView(id)}/>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
