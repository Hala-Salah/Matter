import React from 'react'
import Products from '../../Products'
import TitleComponent from '../../TitleComponent'
import styles from "./style.module.css"

const AlsoLike = () => {
  return (
    <div>
        <TitleComponent title="You May Also Like"/>
        <Products/>
    </div>
  )
}

export default AlsoLike