import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import MealDetails from '../../components/MealDetails';

test('renders Correctly', () => {
  const data = { idMeal: '1', strMealThumb: 'img', strMeal: 'name' };
  const Placeholder = () => (
    <BrowserRouter>
      <MealDetails data={data} />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
