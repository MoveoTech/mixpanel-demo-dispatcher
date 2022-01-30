import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: 0,
  pageSize: 10,
  pageNumber: 1,
};
const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setResults(state, action) {
      state.results = action.payload;
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
  },
});
export const articlesActions = articlesSlice.actions;

export default articlesSlice;
