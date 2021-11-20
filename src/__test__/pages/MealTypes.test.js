import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import MealTypes from '../../pages/mealTypes';
import store from '../../redux';

test('renders Correctly', () => {
  const Placeholder = () => (
    <Provider store={store}>
      <MealTypes />
    </Provider>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
