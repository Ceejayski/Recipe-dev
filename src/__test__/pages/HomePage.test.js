import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import HomePage from '../../pages/homePage';
import store from '../../redux';

test('renders Correctly', () => {
  const Placeholder = () => (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
