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
      action: PayloadAction<{ company: string; data: miniJobDataType[] }>
    ) {
      state.company = action.payload.company;

      // !We would rather perform a full on search rather than doing a search for only this input component
      // if (action.payload.company != "") {
      //   state.isSearching = true;
      // } else {
      //   state.isSearching = false;
      //   state.searchData = [];
      //   return;
      // }

      // state.searchData.length > 0 // If searchData is not empty it means other components like location and isFullTime are also performing searches
      //   ? (state.searchData = state.searchData.filter((item) =>
      //       item.company.toLowerCase().includes(state.company.toLowerCase())
      //     ))
      //   : (state.searchData = action.payload.data?.filter((item) =>
      //       item.company.toLowerCase().includes(state.company.toLowerCase())
      //     ));
    },
    setLocation(
      state,
      action: PayloadAction<{ location: string; data: miniJobDataType[] }>
    ) {
      state.location = action.payload.location;

      // !We would rather perform a full on search rather than doing a search for only this input component
      // if (action.payload.location != "") {
      //   state.isSearching = true;
      // } else {
      //   state.isSearching = false;
      //   state.searchData = [];
      //   return;
      // }

      // state.searchData.length > 0
      //   ? (state.searchData = state.searchData.filter((item) =>
      //       item.location.toLowerCase().includes(state.location.toLowerCase())
      //     ))
      //   : (state.searchData = action.payload.data?.filter((item) =>
      //       item.location.toLowerCase().includes(state.location.toLowerCase())
      //     ));
    },
    setIsFullTime(
      state,
      action: PayloadAction<{ isFullTime: boolean; data: miniJobDataType[] }>
    ) {
      state.isFullTime = action.payload.isFullTime;

      // !We would rather perform a full on search rather than doing a search for only this input component
      // if (action.payload.isFullTime) {
      //   state.isSearching = true;
      // } else {
      //   state.isSearching = false;
      //   state.searchData = [];
      //   return;
      // }

      // state.searchData.length > 0
      //   ? (state.searchData = state.searchData.filter((item) =>
      //       item.contract.toLowerCase().includes("Full Time".toLowerCase())
      //     ))
      //   : (state.searchData = action.payload.data?.filter((item) =>
      //       item.contract.toLowerCase().includes("Full Time".toLowerCase())
      //     ));
    },
    setSearchData(state, action: PayloadAction<miniJobDataType[]>) {
      state.isSearching = true;
      state.searchData = action.payload.filter(
        (item) =>
          item.company.toLowerCase().includes(state.company.toLowerCase()) &&
          item.location.toLowerCase().includes(state.location.toLowerCase()) &&
          (state.isFullTime
            ? item.contract.toLowerCase().includes("Full Time".toLowerCase())
            : true)
      );
    },
  },
});

export const { setCompany, setLocation, setIsFullTime, setSearchData } =
  searchSlice.actions;

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

export const selectClickedData = (state: RootState) =>
  state.jobsDataReducer.clickedPostData;
