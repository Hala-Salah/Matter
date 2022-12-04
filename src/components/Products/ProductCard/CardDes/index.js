import React from 'react'
import Card from "react-bootstrap/Card";
import styles from './styles.module.css'

const CardDes = (props) => {
  return (
    <Card.Body>
          <Card.Title className={styles.cardTitle}>{props.title}</Card.Title>
          <Card.Text>{props.price}</Card.Text>
        </Card.Body>
  )
}

export default CardDes