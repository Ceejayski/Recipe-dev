import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import DietPage from '../../pages/dietPage';
import store from '../../redux';

test('renders Correctly', () => {
  const Placeholder = () => (
    <Provider store={store}>
      <DietPage />
    </Provider>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
