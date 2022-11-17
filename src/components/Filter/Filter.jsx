import PropTypes from 'prop-types';

import { FilterLabel } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onFilter} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
