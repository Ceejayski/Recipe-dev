import handleToAddMeal from '../utils/randomMeal';

const initialState = {
  pending: true,
  meals: [],
  error: '',
};

const randomMealReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RANDOM_SUCCESS':
      return {
        ...state,
        pending: false,
        meals: handleToAddMeal({ prevMealItems: state.meals, nextMealItem: action.meals }),
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default randomMealReducer;
