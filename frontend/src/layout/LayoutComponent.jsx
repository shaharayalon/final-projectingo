import { Fragment } from "react";
import HeaderComponent from "./header/HeaderComponent";
import Router from "../routes/Router";
// import FooterComponent from "./footer/FooterComponent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import FooterComponentShahar from "./footer/FooterComponentShahar";

const LayoutComponent = () => {
  const isDark = useSelector((bigPie) => bigPie.isDarkSlice.isDark);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <Fragment>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <HeaderComponent />
        <Router />
        <FooterComponentShahar />
      </ThemeProvider>
    </Fragment>
  );
};

export default LayoutComponent;
