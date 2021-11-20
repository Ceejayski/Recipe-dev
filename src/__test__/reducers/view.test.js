import ViewReducer from '../../redux/views/view.reducers';

const INITIAL_STATE = {
  viewedRecipes: [],
};

describe('update Viewed Recipes', () => {
  it('should render a single recipe', () => {
    expect(ViewReducer(INITIAL_STATE,
      { type: 'ADD Recipe TO VIEWS', payload: { x: 'oo', y: 'boo', id: 'me' } }))
      .toEqual({ ...INITIAL_STATE, viewedRecipes: [{ x: 'oo', y: 'boo', id: 'me' }] });
  });

  it('should not render a single recipe', () => {
    expect(ViewReducer(INITIAL_STATE,
      { type: 'ADD Recipe TO VIEWS', payload: [{ x: 'oo', y: 'boo', id: 'me' }, { x: 'oo', y: 'boo', id: 'me2' }] }))
      .not.toEqual({ ...INITIAL_STATE, viewedRecipes: [{ x: 'oo', y: 'boo', id: 'me' }] });
  });
});
