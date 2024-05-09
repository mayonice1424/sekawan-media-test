import { createSlice } from "@reduxjs/toolkit";

type NavbarState = {
  activeRoute: string;
};

const initialState: NavbarState = {
  activeRoute: "Overview", 
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setActiveRoute: (state, action) => {
      state.activeRoute = action.payload;
    },
  },
});

export const { setActiveRoute } = navbarSlice.actions;

export default navbarSlice.reducer;
