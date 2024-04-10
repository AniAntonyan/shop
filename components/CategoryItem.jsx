import React from 'react'
import {Link} from 'react-router-dom';


const CategoryItem = ({item}) => {

  return (
    <div className='CategoryItem'>
      <h4>{item.strCategory}</h4>
      <p>{item.strCategoryDescription}</p>
      <img src={item.strCategoryThumb} alt="" />
      <Link className='btn' to={'/category/'+item.strCategory}>{item.strCategory + ' see more..'}</Link>
    </div>
  )
}

export default CategoryItem