import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import SearchBar from '../../components/searchBar';

test('renders Correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
