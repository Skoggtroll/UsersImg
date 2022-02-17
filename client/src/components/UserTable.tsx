import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userSlice } from "../store/slices/UserSlice";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER } from "../mutations/users";
import { GET_ALL_USERS } from "../queries/users";

const UserTable: FC = () => {
  const dispatch = useAppDispatch();

  const [updateUser] = useMutation(UPDATE_USER);
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
  console.log(data);
  const { users } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (!loading) {
      dispatch(userSlice.actions.setUsers(data.getAllUsers));
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [users]);

  const mutateUser = async (user: IUser) => {
    const responce = await updateUser({
      variables: {
        uid: user.id,
        input: {
          name: user.name,
          activated: user.activated,
          email: user.email,
          avatar: user.avatar,
        },
      },
    }).catch((err) => {
      console.log(err);
    });
    console.log(responce);
  };

  const rows: GridRowsProp = users;
  const columns: GridColDef[] = [
    { field: "name", headerName: "Имя", width: 180 },
    { field: "email", headerName: "Почта", width: 230 },
    {
      field: "activated",
      headerName: "Активировать пользователя",
      width: 300,
      renderCell: (params) => {
        return (
          <Switch
            checked={params.row.activated}
            onChange={(event) => {
              dispatch(
                userSlice.actions.updateUser({
                  ...params.row,
                  activated: event.target.checked,
                })
              );
            }}
          />
        );
      },
    },
  ];
  return (
    <Box sx={{ display: "flex", flexFlow: "column", width: "100%" }}>
      <Button
        onClick={(e) => {
          users.forEach((user) => mutateUser(user));
        }}
        variant="contained"
      >
        Сохранить
      </Button>
      <DataGrid
        error={error}
        autoHeight={true}
        checkboxSelection
        disableSelectionOnClick={true}
        rows={rows}
        columns={columns}
        loading={loading}
      />
    </Box>
  );
};

export default UserTable;
