import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { FC } from "react";
import { ITodo } from "../models/ITodo";

interface TodosListProps {
  todos: ITodo[];
}

const UserTable: FC<TodosListProps> = ({ todos }) => {
  return (
    <div style={{ height: 650, width: "100%" }}>
      {
        <List>
          {todos.map((todo) => {
            return (
              <ListItem key={todo.id}>
                <ListItemIcon>
                  <Checkbox checked={todo.completed}></Checkbox>
                </ListItemIcon>
                <ListItemText>{todo.title}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      }
    </div>
  );
};

export default UserTable;
