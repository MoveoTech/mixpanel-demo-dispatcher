import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./slicers/filtersSlice";

const store = configureStore({
    reducer: { filters: filtersSlice.reducer }
})
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch