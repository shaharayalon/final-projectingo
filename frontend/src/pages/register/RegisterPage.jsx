import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { normalizeData } from "./ui/normalizeData";
import { validateRegister } from "../../validation/registerValidation";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import rpStyle from "../../css/RegisterPage.module.css"




const RegisterPage = () => {
  const [registerInputsValue, setRegisterInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    phone: "",
    email: "",
    password: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });
  const [requiredState,setRequiredState]=useState([true,false,true,true,true,true,false,false,false,true,true,true,true,false])
  const[typeState,setTypeState]=useState(["text","text","text","text","email","password","text","text","text","text","text","text","text","text"])
  const [errorsState, setErrorsState] = useState(null);
    const navigate = useNavigate();
  const [checked, setChecked]= useState(false);

  const handleRegisterInputsChange = (e) => {
    setRegisterInputsValue((currentRegisterInputsValue) => ({
      ...currentRegisterInputsValue,
      [e.target.id]: e.target.value,
    }));
  };

const handleChangeCheckBox=  ()=>{
    setChecked(!checked);
  }

  const handleSendInfo = async () => {
    let request = normalizeData(registerInputsValue, checked);
    try {
      const joiResponse = validateRegister(registerInputsValue);
      setErrorsState(joiResponse);
      if (joiResponse) return;
      let { data } = await axios.post("/users", request);
      console.log("data", data);
      navigate(ROUTES.LOGIN);
    } catch (err) {
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
    <Box className={rpStyle.container}>
      <Typography variant="h1" className={rpStyle.title}>Register</Typography>
      {Object.entries(registerInputsValue).map(([key,value],index)=>(
        <Box key={index}>
        <TextField
        id={key}
        label={key.charAt(0).toUpperCase() + key.slice(1)}
        variant="outlined"
        type={typeState[index]}
        value={value}
        onChange={handleRegisterInputsChange}
        required={requiredState[index]}
        className={rpStyle.field}
      />
      {errorsState && errorsState[key] && (
        <Alert severity="warning">{errorsState[key]}</Alert>
      )}
        </Box>
      ))}
        <FormControlLabel
              control={<Checkbox value="remember" color="primary" checked={checked} onChange={handleChangeCheckBox}  />}
              label="Business User"
            />
      <Button variant="contained" onClick={handleSendInfo}>
        Sign Up
      </Button>
    </Box>
  );
};

export default RegisterPage;
