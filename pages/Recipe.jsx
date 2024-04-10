import { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getMealId} from '../api';

const Recipe = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(()=>{
    getMealId(id).then((data)=>{
      setRecipe(data.meals[0]);
    })
  }, []);

  return (
    <div className='Recipe'>
      <button onClick={()=> navigate(-1)}>GO BACK</button>
      <h4>{recipe.idMeal}</h4>
      <h5>{recipe.strArea}</h5>
      <h5>{recipe.strCategory}</h5>
      <img src={recipe.strMealThumb} alt="" />
    </div>
  )
}

export default Recipe