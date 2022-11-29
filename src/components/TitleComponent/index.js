import React from 'react'
import styles from "./styles.module.css";

const TitleComponent = ({title}) => {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}

export default TitleComponent