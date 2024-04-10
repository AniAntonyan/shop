import { useEffect, useState } from 'react'
import {getAllCategories} from '../api';

import CategoryList from '../components/CategoryList';

const Home = () => {

  const [categories, setCategories] = useState([]);


  useEffect(()=>{
    getAllCategories().then(data=>{
      setCategories(data.categories);
    });
  }, []);

  return (
    <div className='Home'>
        <CategoryList categories={categories} />
    </div>
  )
}

export default Home