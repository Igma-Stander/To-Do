//used task example as guide
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./counterState";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  //had to change middleware, because it wasn't working when I followed the example
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
