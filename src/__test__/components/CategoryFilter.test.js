import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import CategoryFilter from '../../components/categoryFilter';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<CategoryFilter current="test" options={['test', 'jest', 'server']} onChange={() => 'test with jest'} />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should have one span', () => {
    expect(component.find('select').length).toBe(1);
  });
});
