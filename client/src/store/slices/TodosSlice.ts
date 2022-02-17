import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo";
import { fetchTodos } from "./ActionsCreators";

interface TodoState {
  todos: ITodo[];
  isLoading: boolean;
  error: string;
}
const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: "",
};

export const todoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodos.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
      state.isLoading = false;
      state.todos = action.payload;
      state.error = "";
    },

    [fetchTodos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchTodos.pending.type]: (state) => {
      state.isLoading = true;
    },
  },
});

export default todoSlice.reducer;
