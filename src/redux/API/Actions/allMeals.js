import {
  fetchRecipesSuccess,
  fetchRecipesError,
} from './index';

const getAllMealsinCat = (type) => (dispatch) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchRecipesSuccess(res.meals));
    })
    .catch((error) => {
      dispatch(fetchRecipesError(error));
    });
};

export default getAllMealsinCat;
