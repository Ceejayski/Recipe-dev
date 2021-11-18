import { combineReducers } from 'redux';
import RecipesReducer from './Recipes';
import SingleRecipeReducer from './SingleRecipe';
import { CategoriesReducer } from './Categories';
import randomMealReducer from './randomMeal';

const apiReducer = combineReducers({
  allMeals: RecipesReducer,
  singleMeal: SingleRecipeReducer,
  categories: CategoriesReducer,
  randomMeals: randomMealReducer,
});

export default apiReducer;
