import React from "react";
import styles from "./styles.module.css";

let rightSectionItem = [
  { id: 0, iconSrc: "/assets/images/NavBarIcons/search.svg", name: "search" },
  { id: 1, iconSrc: "/assets/images/NavBarIcons/heart.svg", name: "heart" },
  { id: 2, iconSrc: "/assets/images/NavBarIcons/Shape.svg", name: "Shape" },
];
const IconsSection = () => {
  return (
    <>
      {" "}
      {rightSectionItem.map((icon) => (
        <img
          src={icon.iconSrc}
          alt={icon.name}
          className={`order-md-12 order-lg-1 ${styles.icon}`}
          key={icon.id}
        />
      ))}
    </>
  );
};

export default IconsSection;
