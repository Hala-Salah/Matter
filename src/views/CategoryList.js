import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryBody from '../components/Category/CategoryBody';
import CategoryHeader from '../components/Category/CategoryHeader';
const CategoryList = () => {
    const {category} = useParams();

  return (
  <><CategoryHeader categoryName={category}/>
  <CategoryBody category={category}/></>

  )
}

export default CategoryList