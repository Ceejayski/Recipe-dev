import handleToAddMeal from '../utils/randomMeal';

const initialState = {
  pending: true,
  products: [],
  error: '',
};

const randomMealReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS_SUCCESS':
      return {
        ...state,
        pending: false,
        products: handleToAddMeal({ prevMealItems: state.products, nextMealItem: action.products }),
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
