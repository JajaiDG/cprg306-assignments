// meal-ideas.js
"use client";

import React, { useState, useEffect } from 'react';

// Function to fetch meal ideas from TheMealDB API
const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // useEffect to call loadMealIdeas whenever the ingredient prop changes
  useEffect(() => {

  // Function to load meal ideas based on the ingredient
  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="flex justify-evenly items-center shadow-md rounded-md p-4 mb-2">
      <h2 className="text-lg font-semibold text-white">Meal Ideas for {ingredient}</h2>
      <ul>
      {meals.length > 0 ? (
          meals.map(meal => (
            <li key={meal.idMeal}>
              {meal.strMeal}
            </li>
          ))
        ) : (
          <p>No meal ideas available.</p>
        )}
      </ul>
    </div>
  );
}
