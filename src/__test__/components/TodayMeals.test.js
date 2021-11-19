import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import TodayMeal from '../../components/todayMeal';
import store from '../../redux';

test('renders Correctly', () => {
  const Placeholder = () => (
    <Provider store={store}>
      <TodayMeal />
    </Provider>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
