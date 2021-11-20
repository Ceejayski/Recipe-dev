import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import IconOption from '../../components/iconOption';
import getQueryResults from '../../redux/API/Actions/searchMeal';

const SearchIcon = () => <i className="fas fa-search" />;
const customStyles = {
  control: (base, state) => ({
    ...base,
    background: state.isFocused ? '#fff' : '#fff',
    borderRadius: '25px',
    borderColor: state.isFocused ? null : '#ccc',
    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      borderColor: state.isFocused ? null : 'white',
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: '5px',
    backgroundColor: '#fff',
    zIndex: 9999,
    fontSize: '0.8em',
    fontFamily: '"Merienda", cursive !important;',
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
};

const DropdownIndicator = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <components.DropdownIndicator {... props}>
    <SearchIcon />
  </components.DropdownIndicator>
);

function SearchBar() {
  const [query, setQuery] = useState('');
  const message = () => {
    if (query.length) {
      return `Can't find "${query}" in Recipe, sorry 🥺`;
    }
    return 'Please input Recipe here';
  };
  return (
    <div className="w-100 search-bar">
      <AsyncSelect
        loadOptions={getQueryResults}
        onInputChange={(value) => { setQuery(value); }}
        components={{ DropdownIndicator, Option: IconOption }}
        placeholder="Search for your Recipe here"
        noOptionsMessage={message}
        styles={customStyles}
        cacheOptions
      />
    </div>
  );
}

export default SearchBar;
