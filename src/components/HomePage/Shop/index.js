import React, {useContext } from "react";
import TitleComponent from "../../TitleComponent";
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ProductsContext } from "../../../App";
import ShopCard from "./ShopCard";

const Shop = () => {
  const ProductData = useContext(ProductsContext);

  if (ProductData) {
    const categoryArray = [...new Set(ProductData.map(item => item.category))];
    const UniqueCategory =categoryArray.map((item)=>{
      return (ProductData.find((image)=>image.category===item))
    })
    return (
      <>
      <TitleComponent title={"Shop"}/>
       <Container className={styles.ShopWrapper}>
        <Row>
        {UniqueCategory.map((item) => {
          return (
           <ShopCard{...item} key={item.id}/>
          );
        })}
        </Row>
       </Container>
      </>
    );
  }
  return <></>;
};

export default Shop;
