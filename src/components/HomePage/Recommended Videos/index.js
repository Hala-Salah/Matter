import React from "react";
import TitleComponent from "../../TitleComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./styles.module.css";
import { BiPlayCircle } from "react-icons/bi";
import SharedButton from "../../SharedButton";
const recommendedData = [
  {
    id: 0,
    title: "Jamdani",
    imgSrc: "/assets/images/RecommendedVideos/video1.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    imgSrc: "/assets/images/RecommendedVideos/video2.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    imgSrc: "/assets/images/RecommendedVideos/video3.png",
  },
];

const RecommendedVideos = () => {
  return (
    <>
      <TitleComponent title={"Recommended Videos"} />
      <Container className={styles.RecVideosContainer}>
        <Row>
          {recommendedData.map((video) => {
            return (
              <Col
                xl="4"
                lg="4"
                md="4"
                sm="4"
                key={video.id}
                className={styles.video}
              >
                <img
                  className={styles.videoImg}
                  src={video.imgSrc}
                  alt={video.title}
                />
                <p>{video.title}</p>
                <div className={styles.overlay}>
                  <BiPlayCircle className={styles.playIcon} />
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
          <div className={styles.showMoreButton}>
            <SharedButton buttonLabel={"Show More"} />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default RecommendedVideos;
