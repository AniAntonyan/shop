import React from 'react'
import CategoryItem from './CategoryItem';

const CategoryList = ({categories}) => {
  return (
    <div className='CategoryList'>
      {
        categories.map(el=>{
          return <CategoryItem 
                    key={el.idCategory} 
                    item={el} 
                  />
        })
      }
    </div>
  )
}

export default CategoryList