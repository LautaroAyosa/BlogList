import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./reducers/blogsReducer";
import filterReducer from "./reducers/filterReducer";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    filter: filterReducer,
  },
});

export default store;