import React from "react";
import Col from "react-bootstrap/Col";
import styles from "./styles.module.css";
const AboutMatterData = [
  { id: 0, title: "ARTISAN EMPLOYMENT DAYS CREATED", infoItems: ["123456"] },
  {
    id: 1,
    title: "COUNTRIES INVOLVED TO DATE",
    infoItems: ["India", "China", "Sri Lanka"],
  },
  { id: 2, title: "#MATTERTRIBE", infoItems: ["12 designers", "12 Factories"] },
];
const RightAboutMatterSection = () => {
  return (
    <>
      <Col lg="6">
        <p>
          Our mission is threefold - to foster designer-artisan collaborations,
          inspire consumers to value provenance and process, and pioneer
          industry change and sustainability for rural textile communities.
        </p>
        {AboutMatterData.map((mapItem,id) => (
          <div className={styles.matterItems} key={mapItem.id}>
            <h1>{mapItem.title}</h1>
            {mapItem.infoItems.map((infoItemMap , index)=>
              <p key={index}>{infoItemMap}</p>
            )}
          </div>
        ))}
      </Col>
    </>
  );
};

export default RightAboutMatterSection;
