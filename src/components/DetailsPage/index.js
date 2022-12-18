import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductDes from '../ProdcutDataBox/ProductDes';
import styles from './styles.module.css';
import Banner from './Banner'
import AfterBanner from './AfterBanner'
import TextParagraph2 from './TextParagraph2';
import AsSeenOnInstagram from './AsSeenOnInstagram'
import Customer from './customerReviews';
const DetailsPage = (props) => {
  return (
    <>
    <Container className={styles.ProductDetailsContainer}>
        <Row>
            <ProductDes title={props.viewedProduct.title}
       price={props.viewedProduct.price}
       description={props.viewedProduct.description}
       category={props.viewedProduct.category}
       rating={props.viewedProduct.rating.rate}
       image={props.viewedProduct.image}/>
        </Row>
    </Container>
    <Banner/>
    <AfterBanner/>
    <TextParagraph2/>
    <AsSeenOnInstagram/>
    <Customer/>
    </>
  )
}

export default DetailsPage