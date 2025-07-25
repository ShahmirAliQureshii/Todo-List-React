import React, { useState } from 'react';
import ConditionCheck from './ConditionCheck';
import List from './List';

const FoodItems = () => {
  const [FoodArr, setFoodArr] = useState([]);
  return (
    <>
    <h1 className="bg-red-300 text-2xl text-center font-bold mx-3 my-2 rounded py-2">Todo List</h1>
      <ul>
      <List setFoodArr={setFoodArr} list={FoodArr}></List>
      </ul>
    </>
  );
};

export default FoodItems;