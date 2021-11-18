import ViewTypes from './view.types';
import handleAddtoView from './view.utils';

const INITIAL_STATE = {
  viewedRecipes: [],
};

const ViewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ViewTypes.ADD_TO_VIEWS:
      return {
        ...state,
        viewedRecipes: handleAddtoView({
          prevRecipeItems: state.viewedRecipes,
          nextRecipeItem: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default ViewReducer;
