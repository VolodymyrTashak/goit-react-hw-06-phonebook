import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { filterContact } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { FilterLabel } from './Filter.styled';

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

// import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

// import { filterContact } from 'redux/filterSlice';
// import { getFilter } from 'redux/selectors';

// import { FilterLabel } from './Filter.styled';

// export const Filter = () => {
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const onFilter = e => {
//     dispatch(filterContact(e.currentTarget.value));
//   };

//   return (
//     <FilterLabel>
//       Find contacts by name
//       <input type="text" name="filter" value={filter} onChange={onFilter} />
//     </FilterLabel>
//   );
// };

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
