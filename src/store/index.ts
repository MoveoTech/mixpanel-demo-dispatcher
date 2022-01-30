import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./slicers/filtersSlice";
import articlesSlice from "./slicers/articlesSlice";

const store = configureStore({
    reducer: { filters: filtersSlice.reducer , articles: articlesSlice.reducer}
})
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch