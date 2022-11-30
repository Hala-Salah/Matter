import React from 'react'
import TitleComponent from '../../TitleComponent'
import styles from './styles.module.css'

const AsSeenOn = () => {
  return (
    <>
    <TitleComponent title={"As Seen On"}/>
    <div className={styles.asSeenOn}>
      <img src="/assets/images/asSeenOn.png" alt="as Seen On" />
    </div>
    </>
  )
}

export default AsSeenOn