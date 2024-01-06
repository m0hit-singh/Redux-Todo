import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./slice";
import modeReducer from "./dark.slice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    mode: modeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;