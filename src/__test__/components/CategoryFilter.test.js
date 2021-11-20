import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import CategoryFilter from '../../components/categoryFilter';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<CategoryFilter current="test" options={['test', 'jest', 'server']} onChange={() => 'test with jest'} />);
  return component;
};

const setup1 = () => {
  const component = shallow(<CategoryFilter current="test" options={['test1', 'jest2', 'server3', 'server4']} onChange={() => 'test with jest'} />);
  return component;
};

describe('Header component', () => {
  let component;
  let component2;
  beforeEach(() => {
    component = setup();
    component2 = setup1();
  });

  it('should have one span', () => {
    expect(component.find('select').length).toBe(1);
  });

  it('should not render render with the same select options', () => {
    expect(component2.find('select')).not.toEqual(component);
  });
});
