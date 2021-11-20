import React from 'react';
import CategoryRecipe from '../containers/categoryRecipes';

export default function CategoryPage() {
  const options = ['Pork', 'Chicken', 'Lamb', 'Side', 'Miscellaneous', 'Goat'];
  return (
    <div>
      <CategoryRecipe options={options} />
    </div>
  );
}
