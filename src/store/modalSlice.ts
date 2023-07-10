import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface modalState {
  render: boolean;
}

const initialModalState: modalState = {
  render: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    changeStateOfModal: (state, action) => {
      state.render = action.payload;
    },
  },
});

export const { changeStateOfModal } = modalSlice.actions;

export default modalSlice.reducer;

export const selectModal = (state: RootState) => state.modalReducer.render;
