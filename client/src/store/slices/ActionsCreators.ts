import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITodo } from "../../models/ITodo";

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      return responce.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Не удалось загрузить Список задач");
    }
  }
);
