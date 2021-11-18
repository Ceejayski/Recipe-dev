import PropTypes from 'prop-types';
import { components } from 'react-select';

const { Option } = components;
const IconOption = (props) => {
  const { data } = props;
  const { icon, value, label } = data;
  return (

  // eslint-disable-next-line react/jsx-props-no-spreading
    <Option {... props}>

      <div className="d-flex align-items-center">
        <div>
          <img
            src={`${icon}/preview`}
            alt={value}
            style={{ width: 50 }}
          />
        </div>
        <div className="ms-2
      "
        >
          {label}
        </div>
      </div>

    </Option>

  );
};

IconOption.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default IconOption;
