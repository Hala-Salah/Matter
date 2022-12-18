import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TitleComponent from "../../TitleComponent";
import styles from "./styles.module.css";

const Data = [
  {
    id: 0,
    imgSrc: "/assets/AsSeenOnInsta/insta1.png",
  },
  {
    id: 1,
    imgSrc: "/assets/AsSeenOnInsta/insta2.png",
  },
  {
    id: 2,
    imgSrc: "/assets/AsSeenOnInsta/insta3.png",
  },
  {
    id: 3,
    imgSrc: "/assets/AsSeenOnInsta/insta4.png",
  },
];

const AsSeenOnInstagram = () => {
  return (
    <div>
      <TitleComponent title="As Seen On Instagram" />
      <Container className={styles.RecVideosContainer}>
        <Row>
          {Data.map((video) => {
            return (
              <Col
                xl="3"
                lg="3"
                md="3"
                sm="3"
                xs="3"
                key={video.id}
                className={styles.video}
              >
                <img
                  className={styles.videoImg}
                  src={video.imgSrc}
                  alt={video.title}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AsSeenOnInstagram;
