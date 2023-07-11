import { miniJobDataType } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface jobsDataState {
  totalNumberOfPosts: number;
  postPerPage: 12;
  indexOfLastPost: number;
  currentData: miniJobDataType[];
  data: miniJobDataType[];
}

const initialJobsDataState: jobsDataState = {
  totalNumberOfPosts: 0,
  postPerPage: 12,
  indexOfLastPost: 12,
  currentData: [],
  data: [],
};

const jobsDataSlice = createSlice({
  name: "data",
  initialState: initialJobsDataState,
  reducers: {
    loadInitialPosts: (state, action: PayloadAction<miniJobDataType[]>) => {
      return {
        ...state,
        totalNumberOfPosts: action.payload.length,
        indexOfLastPost: 12,
        currentData: action.payload.slice(0, 12),
        data: action.payload,
      };
    },
    // Accept the index of the last post as an
    // action and load more posts based on that
    loadMorePosts: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        indexOfLastPost:
          action.payload + 12 < state.totalNumberOfPosts
            ? action.payload + 12
            : state.totalNumberOfPosts,
        currentData: state.data.slice(0, action.payload + 12),
      };
    },
  },
});

export const { loadInitialPosts, loadMorePosts } = jobsDataSlice.actions;

export default jobsDataSlice.reducer;

export const selectTotalNumberOfPosts = (state: RootState) =>
  state.jobsDataReducer.totalNumberOfPosts;

export const selectPostPerPage = (state: RootState) =>
  state.jobsDataReducer.postPerPage;

export const selectIndexOfLastPost = (state: RootState) =>
  state.jobsDataReducer.indexOfLastPost;

export const selectCurrentData = (state: RootState) =>
  state.jobsDataReducer.currentData;

export const selectData = (state: RootState) => state.jobsDataReducer.data;
