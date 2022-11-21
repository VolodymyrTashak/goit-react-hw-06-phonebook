import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContact(state, action) {
      return (state.filter = action.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterContact } = filterSlice.actions;
