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
    openModal: (state) => {
      state.render = true;
    },
    closeModal: (state) => {
      state.render = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

export const selectModal = (state: RootState) => {
  state.modalReducer.render;
};
