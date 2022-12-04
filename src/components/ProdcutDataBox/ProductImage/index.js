import React from 'react'
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css'

const ProductImage = ({image}) => {
  return (
    <Col  >
      <img src={image} alt=""  className={styles.ProductImage}/>
      </Col>
  )
}

export default ProductImage