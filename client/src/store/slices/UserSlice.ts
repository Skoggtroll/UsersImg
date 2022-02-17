import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
// import { fetchUsers } from "./ActionsCreators";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  selectedUsers: IUser[];
  activeUsersImgs: string[];
}
const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  selectedUsers: [],
  activeUsersImgs: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setActiveUsersImg(state, action: PayloadAction<string[]>) {
      state.activeUsersImgs = action.payload;
    },
    updateUser(state, action: PayloadAction<IUser>) {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.users[index] = action.payload;
    },
  },
});

export default userSlice.reducer;
