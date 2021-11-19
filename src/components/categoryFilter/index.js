import PropTypes from 'prop-types';

const CategoryFilter = ({
  onChange, options, current,
}) => (
  <div className="category-filter">
    <select onChange={onChange} value={current} className="form-select">
      {options.map((val) => <option key={val} value={val}>{val}</option>)}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(String).isRequired,
};

export default CategoryFilter;
