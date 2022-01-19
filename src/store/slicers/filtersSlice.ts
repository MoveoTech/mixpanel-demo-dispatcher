import { createSlice } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../../utils/types";

const initialState = {
  endpoint: "top-headlines",
  searchInput: "",
  source: "",
  dateFrom: "",
  dateTo: "",
  language: "",
  sortBy: "",
  country: "",
  category: "",
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeEndpoint(state, action) {
      switch (action.payload) {
        case ENDPOINTS.topheadlines:
          return (state = {
            ...initialState,
            endpoint: ENDPOINTS.topheadlines,
            source: state.source,
            searchInput: state.searchInput,
          });
        case ENDPOINTS.everything:
          return (state = {
            ...initialState,
            endpoint: ENDPOINTS.everything,
            source: state.source,
            searchInput: state.searchInput,
          });
      }
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setDateFrom(state, action) {
      state.dateFrom = action.payload;
    },
    setDateTo(state, action) {
      state.dateTo = action.payload;
    },
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    setSource(state, action) {
      state.source = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice;
