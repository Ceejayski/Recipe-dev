import { fetchRecipesSuccess, fetchRecipesError } from '.';

const getRandomMeals = () => (dispatch) => {
  fetch('www.themealdb.com/api/json/v1/1/random.php')
    .then((res) => res.json())
    .then((res) => {
      dispatch(fetchRecipesSuccess(res.meals));
    }).catch((error) => {
      dispatch(fetchRecipesError(error));
    });
};

export default getRandomMeals;
