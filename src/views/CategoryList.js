import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryProductList from '../components/Category';
const CategoryList = () => {
    const {category} = useParams();
  return (
  <CategoryProductList category={category}/>
  )
}

export default CategoryList