import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?userId=1"
  );
  return response.data;
});

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    taskTitle: "",
    id: 101,
  },
  reducers: {
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskComplete(state, action) {
      const taskId = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.completed = !taskToUpdate.completed;
      }
    },
    setTaskTitle(state, action) {
      state.taskTitle = action.payload;
    },
    addTask(state) {
      const newTask = {
        id: state.id++,
        title: state.taskTitle,
        completed: false,
      };
      state.tasks.push(newTask);
      state.taskTitle = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export const { deleteTask, toggleTaskComplete, setTaskTitle, addTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
