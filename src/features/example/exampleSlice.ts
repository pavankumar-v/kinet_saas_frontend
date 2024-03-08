import { createSlice } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  text: string;
};

export const exampleSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state: Todo[], action) => {
      const todo: Todo = {
        id: "2345",
        text: action.payload,
      };

      state.push(todo);
    },
  },
});

// this is for dispatch
export const { addTodo } = exampleSlice.actions;

// this is for configureStore
export default exampleSlice.reducer;
