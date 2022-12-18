import React from 'react'
import styles from "./styles.module.css"
const TextParagraph = (prop) => {
  return (
    <div className={styles.textWrapper}>{prop.text}</div>
  )
}

export default TextParagraph