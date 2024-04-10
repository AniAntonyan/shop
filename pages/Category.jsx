import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {getFilteredCategory} from '../api';

import MealList from '../components/MealList';

const Category = () => {

  const {name} = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);


  useEffect(()=>{
    getFilteredCategory(name).then((data)=>{
      setMeals(data.meals);
    });
  }, []);

  return (
    <>
    <button onClick={()=> navigate(-1)}>GO BACK</button>
      <MealList meals={meals} />
    </>
  )
}

export default Category