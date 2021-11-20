import React from 'react';
import CategoryRecipe from '../containers/categoryRecipes';

export default function MealTypes() {
  const options = ['Dessert', 'Starter', 'Breakfast'];
  return (
    <div>
      <CategoryRecipe options={options} />
    </div>
  );
}
