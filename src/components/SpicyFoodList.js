import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

//update state and get new food dynamically
// adding elements to array in state
function handleAddFood(){
  const newFood = getNewSpicyFood()
  
  //using spread operator to make a copy of our foods array and insert it in a new array
  const newFoodArray = [...foods, newFood]
  setFoods(newFoodArray);
}


//removing element from Arrays in State
const foodList = foods.map((food)=>(
  <li key={food.id} onClick={()=> handleLiClick(food.id)}>
    {food.name} | Heat:{food.heatLevel} | Cuisine: {food.cuisine}
    //using .filter() to remove
 
  </li>

))

function handleLiClick(id){
  const newFoodArray = foos.map((food)=>{
    if(food.id === id){
      return{
        ...food,
        heatLevel: food.heatLevel+1
      }
    } else{
      return food
    }
  })
  setFoods(newFoodArray)
}

const [filterBy, setFilterBy] =  useState('All')
function handleFilter(event){
  setFilterBy(event.target.value)
  return(
    <select name="filter" onChange={handleFilterChange}>
    <option value="All">All</option>
    <option value="American">American</option>
    <option value="Sichuan">Sichuan</option>
    <option value="Thai">Thai</option>
    <option value="Mexican">Mexican</option>
  </select>
  )
}

const [foods, setFoods] = useState(spicyFoods);


const foodsToDisplay = foods.filter((food)=>{
  if(filterBy === 'All'){
    return true;
  } else {
    return food.cuisine === filterBy
  }
  
})



export default SpicyFoodList;
