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
  it('should not equal catgories', () => {
    expect(CategoriesReducer(initialState,
      { type: 'FETCH_CATEGORIES_SUCCESS', categories: ['test', 'Jest'] })).not.toEqual({ ...initialState, categories: [] });
  });
});

describe('update error', () => {
  it('should return errors', () => {
    expect(CategoriesReducer(initialState,
      { type: 'FETCH_PRODUCTS_ERROR', error: 'sirchi' })).toEqual({ ...initialState, error: 'sirchi' });
  });
  it('should not equal errors', () => {
    expect(CategoriesReducer(initialState,
      { type: 'FETCH_PRODUCTS_ERROR', error: 'sirchi' })).not.toEqual({ ...initialState, error: '' });
  });
});
