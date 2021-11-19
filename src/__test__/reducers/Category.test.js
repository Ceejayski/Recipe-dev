import { CategoriesReducer } from '../../redux/API/Reducers/Categories';

const initialState = {
  pending: false,
  categories: [],
  error: '',
};

describe('update category', () => {
  it('should fetch the categories', () => {
    expect(CategoriesReducer(initialState,
      { type: 'FETCH_CATEGORIES_SUCCESS', categories: ['test', 'Jest'] })).toEqual({ ...initialState, categories: ['test', 'Jest'] });
  });
});
