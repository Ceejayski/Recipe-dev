const initialState = {
  pending: true,
  products: [],
  error: '',
  category: '',
};

const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        pending: false,
        products: action.products,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        category: action.category,
        pending: true,
      };
    default:
      return state;
  }
};

export default RecipesReducer;
