import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import CategoryRecipe from '../../components/categoryRecipes';
import store from '../../redux';

test('renders Correctly', () => {
  const Placeholder = () => (
    <Provider store={store}>
      <CategoryRecipe options={['test', 'jest']} />
    </Provider>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
