import randomMealReducer from '../../redux/API/Reducers/randomMeal';

const initialState = {
  pending: true,
  meals: [],
  error: '',
};

describe('update category', () => {
  it('should return views', () => {
    expect(randomMealReducer(initialState,
      { type: 'FETCH_RANDOM_SUCCESS', meals: ['test', 'Jest'] })).toEqual({
      ...initialState,
      pending: false,
      meals: [{
        0: 'test',
        1: 'Jest',
      }],
    });
  });
  it('should not fetch the view', () => {
    expect(randomMealReducer(initialState,
      { type: 'FETCH_RANDOM_SUCCESS', meals: ['test', 'Jest', '2'] })).not.toEqual({
      ...initialState,
      pending: false,
      meals: [{
        0: 'test',
        1: 'Jest',
      }],
    });
  });
});
