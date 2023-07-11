// import jobsData from "@/data.json";
import { miniJobDataType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { act } from "react-dom/test-utils";

export interface paginationState {
  totalNumberOfPosts: number;
  postPerPage: 12;
  indexOfLastPost: number;
  currentData: miniJobDataType[];
  data: miniJobDataType[];
}

const initialPaginationState: paginationState = {
  totalNumberOfPosts: 0,
  postPerPage: 12,
  indexOfLastPost: 12,
  currentData: [],
  data: [],
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialPaginationState,
  reducers: {
    initialPosts: (state, action: { payload: miniJobDataType[] }) => {
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
    loadMorePosts: (state, action: { payload: number }) => {
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

export const { initialPosts, loadMorePosts } = paginationSlice.actions;

export default paginationSlice.reducer;

export const selectTotalNumberOfPosts = (state: RootState) =>
  state.paginationReducer.totalNumberOfPosts;

export const selectPostPerPage = (state: RootState) =>
  state.paginationReducer.postPerPage;

export const selectIndexOfLastPost = (state: RootState) =>
  state.paginationReducer.indexOfLastPost;

export const selectCurrentData = (state: RootState) =>
  state.paginationReducer.currentData;

export const selectData = (state: RootState) => state.paginationReducer.data;
