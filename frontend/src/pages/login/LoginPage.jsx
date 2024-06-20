import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { jwtDecode } from "jwt-decode";
import { validateLogin } from "../../validation/loginValidation";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const LoginPage = () => {
  const [inputsValue, setInputsValue] = useState({ email: "", password: "" });
  const [errorsState, setErrorsState] = useState(null);
  const [checked, setChecked]= useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInputsChange = (e) => {
    setInputsValue((currentInputsValue) => ({
      ...currentInputsValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleChangeCheckBox= async ()=>{
    setChecked(!checked);
  }
  const handleMoveToHomePage = async () => {
    try {
      const joiResponse = validateLogin(inputsValue);
      setErrorsState(joiResponse);
      if (joiResponse) return;
      let { data } = await axios.post("/users/login", inputsValue);
      if(checked){
      localStorage.setItem("token", data);
      }else{
        sessionStorage.setItem("token", data);
      }

      toast("You Logged In Successfully! 💚", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(authActions.login(jwtDecode(data)));
      navigate(ROUTES.HOME);
    } catch (err) {
      console.log("the error is: ", err);
       toast(`${err.response.data} 🥵`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      gap="2vw"
      minHeight="93vh"
    >
      <Typography variant="h1">Login</Typography>
      <TextField
        id="email"
        label="Mail"
        variant="outlined"
        type="email"
        pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
        value={inputsValue.email}
        onChange={handleInputsChange}
      />
      {errorsState && errorsState.email && (
        <Alert severity="warning">{errorsState.email}</Alert>
      )}
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        value={inputsValue.password}
        onChange={handleInputsChange}
      />
      {errorsState && errorsState.password && (
        <Alert severity="warning">{errorsState.password}</Alert>
      )}
       <FormControlLabel
              control={<Checkbox value="remember" color="primary" checked={checked} onChange={handleChangeCheckBox}  />}
              label="Remember me"
            />
      <Button variant="contained" onClick={handleMoveToHomePage}>
        login
      </Button>
    </Box>
  );
};

export default LoginPage;
