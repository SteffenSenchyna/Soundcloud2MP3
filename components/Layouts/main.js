import Navbar from "./Navbar";
import { Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "rgba(0,0,0,0.87)",
      //main: "#ffc107",
    },
    secondary: {
      main: "#000000",
      //main: "rgba(0,0,0,0.87)",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
    },
    warning: {
      main: "#607d8b",
    },
    background: {
      default: "#e0e0e0",
    },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar></Navbar>

        <Container maxWidth="xl" sx={{ mt: 2 }}>
          {children}
        </Container>
      </div>
    </ThemeProvider>
  );
};
export default Layout;
