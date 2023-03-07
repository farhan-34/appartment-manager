import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MiniDrawer from "./components/Drawer";
import AppRouter from "./navigation/RouterConfig";
import { getTheme } from "./theme";
import { Login } from "./pages";
import { createStructuredSelector } from "reselect";
import { getAuthSession } from "./redux/authentication/authentication.selectors";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const App = ({auth}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const mode = useSelector((store) => store.theme.mode);
  const [theme, setTheme] = useState(createTheme(getTheme(mode)));

  useEffect(() => {
    setTheme(createTheme(getTheme(mode)));
  }, [mode])

  if(location.pathname === '/'){
      navigate( auth ? '/home' : '/login')
  }
  
  return (
    <ThemeProvider theme={theme}>

      {!auth && (<Routes>
        <Route path='/login' element={<Login />} />
      </Routes>)}
      {auth && (
        <Box sx={{ display: "flex" }}>
          <CssBaseline>
            <MiniDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <AppRouter />
            </Box>
          </CssBaseline>
        </Box>
      )}

    </ThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  auth: getAuthSession,
});

export default connect(mapStateToProps)(App);
