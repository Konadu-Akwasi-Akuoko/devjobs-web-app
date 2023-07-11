import { miniJobDataType } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface jobsDataState {
  totalNumberOfPosts: number;
  postPerPage: 12;
  indexOfLastPost: number;
  currentData: miniJobDataType[];
  data: miniJobDataType[];
  clickedPostID: number | undefined | null;
  clickedPostData: miniJobDataType | undefined | null;
}

const initialJobsDataState: jobsDataState = {
  totalNumberOfPosts: 0,
  postPerPage: 12,
  indexOfLastPost: 12,
  currentData: [],
  data: [],
  clickedPostID: undefined,
  clickedPostData: undefined,
};

const jobsDataSlice = createSlice({
  name: "data",
  initialState: initialJobsDataState,
  reducers: {
    loadInitialPosts: (state, action: PayloadAction<miniJobDataType[]>) => {
      state.totalNumberOfPosts = action.payload.length;
      state.indexOfLastPost = 12;
      state.currentData = action.payload.slice(0, 12);
      state.data = action.payload;
    },
    // Accept the index of the last post as an
    // action and load more posts based on that
    loadMorePosts: (state, action: PayloadAction<number>) => {
      state.indexOfLastPost =
        action.payload + 12 < state.totalNumberOfPosts
          ? action.payload + 12
          : state.totalNumberOfPosts;
      state.currentData = state.data.slice(0, action.payload + 12);
    },
    loadClickedPost: (state, action: PayloadAction<number>) => {
      state.clickedPostID = action.payload;
      state.clickedPostData = state.data.find(
        (post) => post.id === action.payload
      );
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
