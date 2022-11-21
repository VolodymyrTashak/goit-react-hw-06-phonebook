import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { FilterLabel } from './Filter.styled';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" onChange={onFilter} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
