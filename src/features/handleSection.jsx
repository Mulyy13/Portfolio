import { createSlice } from "@reduxjs/toolkit";

export const closeLetter = createSlice({
  name: "closeLetter",
  initialState: {
    value: Boolean,
  },
  reducers: {
    close: (state) => {
      state.value = false;
    },
  },
});
export const { close } = closeLetter.actions;

export default closeLetter.reducer;
