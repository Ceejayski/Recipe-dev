import RecipesReducer from '../../redux/API/Reducers/Recipes';

const initialState = {
  pending: false,
  products: [],
  error: undefined,
  category: undefined,
};
describe('update category', () => {
  it('should fetch the categories', () => {
    expect(RecipesReducer(initialState,
      { type: 'FETCH_PRODUCTS_SUCCESS', products: ['Pasta', 'Pork'] })).toEqual({
      ...initialState,
      pending: false,
      products: ['Pasta', 'Pork'],
    });
  });
});
