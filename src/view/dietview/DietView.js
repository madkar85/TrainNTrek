import React, { useState } from "react";
import MealList from "../../components/dietMeal/MealList";
import "./DietView.css";

function DietView() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const spoonacularkey = process.env.REACT_APP_SPOONACULAR_KEY;

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${spoonacularkey}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="Diet">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default DietView;
