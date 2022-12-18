import React, { useContext } from "react";
import TitleComponent from "../../TitleComponent";
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { CategoryContext, ProductsContext } from "../../../App";
import ShopCard from "./ShopCard";

const Shop = () => {
  const categories = useContext(CategoryContext);

  const ProductData = useContext(ProductsContext);

  if (ProductData && categories) {
    const oneItemOfCategory = categories.map((item) => {
      return ProductData.find((image) => image.category === item);
    });
    return (
      <>
        <TitleComponent title={"Shop"} />
        <Container className={styles.ShopWrapper}>
          <Row>
            {oneItemOfCategory.map((item) => {
              return <ShopCard {...item} key={item.id} />;
            })}
          </Row>
        </Container>
      </>
    );
  }

  return <></>;
};

export default Shop;
