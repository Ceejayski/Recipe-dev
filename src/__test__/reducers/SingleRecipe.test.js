import SingleRecipeReducer from '../../redux/API/Reducers/SingleRecipe';

const initialState = {
  pending: false,
  details: {},
  error: undefined,
};

describe('update Meal Details', () => {
  it('should render a single recipe', () => {
    expect(SingleRecipeReducer(initialState,
      { type: 'FETCH_MEAL_SUCCESS', details: { x: 'oo', y: 'boo' } }))
      .toEqual({ ...initialState, details: { x: 'oo', y: 'boo' } });
  });
  it('should not render a single recipe', () => {
    expect(SingleRecipeReducer(initialState,
      { type: 'FETCH_PRODUCTS_SUCCESS', error: 'why Though' }))
      .not.toEqual({ ...initialState, details: { x: 'oo', y: 'boo' } });
  });
});
