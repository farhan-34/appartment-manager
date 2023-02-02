import { hot } from "react-hot-loader/root";
import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiniDrawer from "./components/Drawer";
import AppRouter from "./navigation/RouterConfig";
import { getTheme } from "./theme";
import { Login } from "./pages";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const App = () => {
  const mode = useSelector((store) => store.theme.mode);
  const [theme, setTheme] = useState(createTheme(getTheme(mode)));

  useEffect(() => {
    setTheme(createTheme(getTheme(mode)));
  }, [mode])

  const auth = false

  return (
    <Box sx={{ display: "flex" }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {!auth && (<Routes>
                <Route path='/login' element={ <Login /> } />
          </Routes>)}
          {auth && (<CssBaseline>
            <MiniDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <AppRouter />
            </Box>
          </CssBaseline>)}
        </ThemeProvider>
      </BrowserRouter>
    </Box>
  );
}

export default hot(App);
