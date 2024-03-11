import React, { useState } from "react";

function UpdateState() {
  const [foods, setFood] = useState(["apple", "orange", "banana"]);
  function handleAddFood() {
    const newFood = document.getElementById("food-input").value;
    if (value) {
      document.getElementById("food-input").value = "";
      setFood((prevFoods) => [...prevFoods, newFood]);
    }
  }

  function handleRemoveFood(index) {
    setFoods((f) => {
      //_ to ignore
      f.filter((_, index) => {
        i !== index;
      });
    });
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="food-input" placeholder="Enter Food Name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
export default UpdateState;
