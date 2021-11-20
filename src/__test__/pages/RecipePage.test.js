import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import RecipePage from '../../pages/recipePage';
import store from '../../redux';

test('renders Correctly', () => {
  const Placeholder = () => (
    <Provider store={store}>
      <RecipePage />
    </Provider>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
