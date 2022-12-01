import React from 'react'
import styles from './styles.module.css'

const SharedButton = (prop) => {
  return (
  
    <button className={styles.SharedButton} onClick={prop.onCLickButton}>{prop.buttonLabel}</button>

  )
}

export default SharedButton