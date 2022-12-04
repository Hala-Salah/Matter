import React from 'react'
import styles from './styles.module.css'
const MoreDetails = (props) => {
  return (
    <div className={styles.MoreDetails}>
    <h1>{props.title}</h1>
    <p>{props.des}</p>
    </div>
  )
}

export default MoreDetails