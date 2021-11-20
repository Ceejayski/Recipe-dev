import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Carousel from '../../components/carousel';

describe('Carousel', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <Carousel />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
  it('tree should not be empty', () => {
    expect(tree).not.toBe('');
  });
});
