import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import CategoryPage from '../../pages/categoryPage';
import store from '../../redux';

test('renders Correctly', () => {
  const Placeholder = () => (
    <Provider store={store}>
      <CategoryPage />
    </Provider>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
