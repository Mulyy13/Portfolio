import { createSlice } from "@reduxjs/toolkit";

export const handleSection = createSlice({
  name: "handleSection",
  initialState: {
    value: "",
  },
  reducers: {
    about: (state) => {
      state.value = "about";
    },
    projects: (state) => {
      state.value = "projects";
    },
    skills: (state) => {
      state.value = "skills";
    },
    contact: (state) => {
      state.value = "contact";
    },
  },
});
export const { about, projects, skills, contact } = handleSection.actions;

export default handleSection.reducer;
