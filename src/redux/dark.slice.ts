import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const isDark: boolean = false;

export const DarkModeSlice = createSlice({
  name: "isDark",
  initialState: isDark,
  reducers: {
    toggleDark: (_state, action: PayloadAction<boolean>) => {
      return !!action.payload;
    },
  },
});

export const { toggleDark } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;
