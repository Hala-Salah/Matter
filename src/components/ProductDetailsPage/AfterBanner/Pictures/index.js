import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import styles from "./styles.module.css"

const Pictures = () => {
  const Data = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet 0",
      imgSrc: "/assets/AfterBanner/pic1.png",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet 1",
      imgSrc: "/assets/AfterBanner/pic2.png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet 2",
      imgSrc: "/assets/AfterBanner/pic3.png",
    },
  ]
  return (
        <div >
          <Container className={styles.RecVideosContainer}>
          <Row>
          {Data.map((item) => {
            return (
              <Col
                xl="4"
                lg="4"
                md="4"
                sm="4"
                xs="4"
                key={item.id}
                className={styles.item}
              >
                <img
                  className={styles.videoImg}
                  src={item.imgSrc}
                  alt={item.title}
                />
                <p className={styles.caption}>{item.title}</p>
              </Col>
            );
          })}
        </Row>
          
          </Container>
    
          </div>
        
  );
};


export default Pictures;


