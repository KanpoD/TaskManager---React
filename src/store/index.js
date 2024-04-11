import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../store/Slice/tasksSlice.js";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
