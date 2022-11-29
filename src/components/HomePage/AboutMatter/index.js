import React from "react";
import TitleComponent from "../../TitleComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./styles.module.css";
import RightAboutMatterSection from "./RightAboutMatterSection";
const AboutMatter = () => {
  return (
    <>
      <TitleComponent title={"About Matter"} />
      <Container className={styles.AboutMatterWrapper}>
        <Row>
          <Col className={styles.RightSection}>
            <img
              src="/assets/images/about.png"
              className={styles.aboutImage}
              alt=""
            />
          </Col>
          <RightAboutMatterSection/>
        </Row>
      </Container>
    </>
  );
};

export default AboutMatter;
