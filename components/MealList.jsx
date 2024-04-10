import MealItem from './MealItem';


const MealList = ({meals}) => {

  return (
    <div>
      {
        meals.map(meal=>{
          return <MealItem key={meal.idMeal} {...meal} />
        })
      }
    </div>
  )
}

export default MealList