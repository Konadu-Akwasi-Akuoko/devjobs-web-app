import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import searchReducer from "./searchSlice";
import modalReducer from "./modalSlice";
import jobsDataReducer from "./jobsDataSlice";

export const store = configureStore({
  reducer: {
    themeReducer,
    searchReducer,
    modalReducer,
    jobsDataReducer,
  },
});

// export a type named RootState that represents the state of the store
export type RootState = ReturnType<typeof store.getState>;

// export a type named AppDispatch that represents the dispatch function of the store
export type AppDispatch = typeof store.dispatch;
