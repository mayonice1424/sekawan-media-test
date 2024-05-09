import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../../src/redux/slice/navbarSlice";
import dataReducer from "./slice/dataSlice";
export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    data: dataReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;