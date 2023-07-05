import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface themeState {
  theme: string;
}

const initialThemeState: themeState = { theme: "" };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    changeTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
