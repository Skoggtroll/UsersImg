import React, { useEffect } from "react";
import TodosList from "../components/TodosList";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchTodos } from "../store/slices/ActionsCreators";

const TodosPage = () => {
  const dispatch = useAppDispatch();
  const { todos, error, isLoading } = useAppSelector(
    (state) => state.todosReducer
  );
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return <TodosList todos={todos} />;
};

export default TodosPage;
