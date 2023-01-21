import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/slices/authSlice";

const Layout = () => {
  const { isAuth } = useAppSelector((store) => store.auth);

  const dispatch = useAppDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ mb: 3 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rick & Morty App
          </Typography>
          {isAuth && (
            <Button color="inherit" onClick={() => dispatch(logout())}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Layout;
