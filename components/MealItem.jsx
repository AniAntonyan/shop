import {Link} from 'react-router-dom'


const MealItem = ({idMeal, strMeal, strMealThumb}) => {
  return (
    <div className='MealItem'>
      <h4>{idMeal + ' : ' + strMeal}</h4>
      <img src={strMealThumb} alt="" />
      <Link to={'/recipe/'+idMeal}>Detail {strMeal}</Link>
    </div>
  )
}

export default MealItem