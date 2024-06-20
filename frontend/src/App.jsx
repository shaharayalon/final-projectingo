import { Box } from "@mui/material";
import LayoutComponent from "./layout/LayoutComponent";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useAutoLogin from "./hooks/useAutoLogin";

const App = () => {
  useAutoLogin();
  return (
    <Box>
      <ToastContainer />
      <LayoutComponent />
    </Box>
  );
};

export default App;
