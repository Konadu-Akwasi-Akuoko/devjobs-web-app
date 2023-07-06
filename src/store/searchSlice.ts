import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface searchState {
  company: string;
  location: string;
  isFullTime: boolean;
}

const initialSearchState: searchState = {
  company: "",
  location: "",
  isFullTime: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    setCompany(state, action: PayloadAction<string>) {
      state.company = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setIsFullTime(state, action: PayloadAction<boolean>) {
      state.isFullTime = action.payload;
    },
  },
});

export const { setCompany, setLocation, setIsFullTime } = searchSlice.actions;

export default searchSlice.reducer;

export const selectCompany = (state: RootState) => state.searchReducer.company;
export const selectLocation = (state: RootState) =>
  state.searchReducer.location;
export const selectIsFullTime = (state: RootState) =>
  state.searchReducer.isFullTime;
