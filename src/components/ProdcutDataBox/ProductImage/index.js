import React from 'react'
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css'

const ProductImage = ({image}) => {
  return (
    <Col xl="5" lg="4" md="4" >
      <img src={image} alt=""  className={styles.ProductImage}/>
      </Col>
  )
}

export default ProductImage