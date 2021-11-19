import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Carousel from '../../components/carousel';

test('renders Correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <Carousel />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
