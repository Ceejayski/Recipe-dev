import ViewTypes from './view.types';

const addRecipeToViewed = (nextRecipeItem) => {
  const action = { type: ViewTypes.ADD_TO_VIEWS, payload: nextRecipeItem };
  return action;
};
export default addRecipeToViewed;
