import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { components } from 'react-select';

const { Option } = components;
const IconOption = (props) => {
  const { data } = props;
  const { icon, value, label } = data;
  return (

  // eslint-disable-next-line react/jsx-props-no-spreading
    <Option {... props}>

      <Link to={`/recipe/${value}`}>
        <div className="d-flex align-items-center">
          <div>
            <img
              src={`${icon}/preview`}
              alt={value}
              style={{ width: 50 }}
            />
          </div>
          <div className="ms-2">
            {label}
          </div>
        </div>
      </Link>

    </Option>

  );
};

IconOption.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default IconOption;
