import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface themeState {
  theme: string;
}

// Get the theme from local storage, if it's undefined set the theme to light
const initialThemeState: themeState = JSON.parse(
  localStorage.getItem("theme") || '{"theme": "light"}'
);

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
