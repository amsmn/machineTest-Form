import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  CountryListData: {},
  errors: {},
};

export const slice = createSlice({
  name: "countryList",
  initialState,
  reducers: {
    clearCountryListData: () => initialState,
    setCountryListLoading: (state) => {
      state.isLoading = true;
    },
    setCountryListData: (state, action) => {
      state.isLoading = false;
      state.CountryListData = action.payload;
    },
    setCountryListError: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    clearCountryListError: (state) => {
      state.isLoading = false;
      state.errors = {};
    }
  },
});

export const { clearCountryListData, setCountryListLoading, setCountryListData, setCountryListError, clearCountryListError } = slice.actions;

export default slice.reducer;