import { fetchRandomSuccess, fetchRecipesError } from '.';

const getRandomMeals = () => (dispatch) => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res) => res.json())
    .then((res) => {
      dispatch(fetchRandomSuccess(res.meals[0]));
    }).catch((error) => {
      dispatch(fetchRecipesError(error));
    });
};

export default getRandomMeals;
