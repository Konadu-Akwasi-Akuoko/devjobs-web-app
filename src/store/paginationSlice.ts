// import jobsData from "@/data.json";
import { miniJobDataType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface paginationState {
  totalNumberOfPosts: number;
  postPerPage: 12;
  currentPosts: number;
  indexOfLastPost: number;
  data: miniJobDataType[];
}

const initialPaginationState: paginationState = {
  totalNumberOfPosts: 0,
  postPerPage: 12,
  currentPosts: 0,
  indexOfLastPost: 12,
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
        currentPosts: 12,
        indexOfLastPost: 12,
        data: action.payload.slice(0, 12),
      };
    },
    
  },
});

export const { initialPosts } = paginationSlice.actions;

export default paginationSlice.reducer;

export const selectTotalNumberOfPosts = (state: RootState) =>
  state.paginationReducer.totalNumberOfPosts;

export const selectPostPerPage = (state: RootState) =>
  state.paginationReducer.postPerPage;

export const selectCurrentPosts = (state: RootState) =>
  state.paginationReducer.currentPosts;

export const selectIndexOfLastPost = (state: RootState) =>
  state.paginationReducer.indexOfLastPost;

export const selectData = (state: RootState) => state.paginationReducer.data;
