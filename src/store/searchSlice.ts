import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { miniJobDataType } from "@/types/types";

export interface searchState {
  company: string;
  location: string;
  isFullTime: boolean;
  isSearching: boolean;
  searchData: miniJobDataType[];
}

const initialSearchState: searchState = {
  company: "",
  location: "",
  isFullTime: false,
  isSearching: false,
  searchData: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    setCompany(
      state,
      action: PayloadAction<{ company: string; data?: miniJobDataType[] }>
    ) {
      if (action.payload.company != "") {
        state.isSearching = true;
      } else {
        state.isSearching = false;
      }

      state.company = action.payload.company;
      // Filter down the data and show data that includes what we are typing
      state.searchData =
        action.payload.data?.filter((item) =>
          item.company.toLowerCase().includes(state.company.toLowerCase())
        ) || [];
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

export const selectCompanyState = (state: RootState) =>
  state.searchReducer.company;
export const selectLocationState = (state: RootState) =>
  state.searchReducer.location;
export const selectIsFullTimeState = (state: RootState) =>
  state.searchReducer.isFullTime;

export const selectIsSearching = (state: RootState) =>
  state.searchReducer.isSearching;

export const selectSearchData = (state: RootState) =>
  state.searchReducer.searchData;
