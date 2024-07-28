import { createSlice } from "@reduxjs/toolkit";

//creating a slice according to example in the task
const todoSlice = createSlice({
  name: "todo",

  //couldn't make the initial state exactly like the task wanted
  initialState: {
    list: [
      { content: "Go grocery shopping", completed: false },
      {
        content: "Wash my shoes",
        completed: false,
      },
    ],
  },

  //reducers to add, delete, edit and toggle completion status of todo list
  reducers: {
    add: (state, action) => {
      state.list.push({ content: action.payload, completed: false });
    },
    remove: (state, action) => {
      state.list = state.list.filter((todo, index) => index !== action.payload);
    },
    edit: (state, action) => {
      const { index, content } = action.payload;
      state.list[index].content = content;
    },
    completed: (state, action) => {
      const todo = state.list[action.payload];
      todo.completed = !todo.completed;
    },
  },
});

export const { add, edit, remove, completed } = todoSlice.actions;
export default todoSlice.reducer;
