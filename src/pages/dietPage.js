import React from 'react';
import CategoryRecipe from '../components/categoryRecipes';

export default function DietPage() {
  const options = ['Seafood', 'Beef', 'Vegan', 'Vegetarian'];
  return (
    <div>
      <CategoryRecipe options={options} />
    </div>
  );
}
