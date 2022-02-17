import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import {
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { EventNote } from "@mui/icons-material";
import TodosPage from "./pages/TodosPage";
import { Sidebar } from "./components/Sidebar";
import { grey } from "@mui/material/colors";
import Header from "./components/Header";
import UserTable from "./components/UserTable";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex", height: "100vh", bgcolor: grey[200] }}>
        <Box sx={{ display: "flex" }}>
          <Sidebar>
            <Link to="/users">
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={"Users"}></ListItemText>
              </ListItem>
              <Divider />
            </Link>
            <Link to="/todos">
              <ListItem button>
                <ListItemIcon>
                  <EventNote />
                </ListItemIcon>
                <ListItemText primary={"ToDos"}></ListItemText>
              </ListItem>
              <Divider />
            </Link>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <EventNote />
                </ListItemIcon>
                <ListItemText primary={"Home"}></ListItemText>
              </ListItem>
              <Divider />
            </Link>
          </Sidebar>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Header></Header>
          <Box sx={{ display: "flex", m: "100px 40px", bgcolor: "white" }}>
            <Routes>
              <Route path={"/"} element={<HomePage />}></Route>
              <Route path={"/users"} element={<UserTable />}></Route>
              <Route path={"/todos"} element={<TodosPage />}></Route>
            </Routes>
          </Box>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
