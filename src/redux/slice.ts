import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItemType } from "../types/todoItem.type";

const initialState: TodoItemType[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemType>) => {
      const todo = {
        id: Math.random().toString(36).split(".")[1],
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action: PayloadAction<TodoItemType>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
