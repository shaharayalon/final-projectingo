import { Alert ,Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { validateCreateCard } from "../../validation/createCardValidation";
import { normalaizeCreateCard, normalizeAxiosRequest } from "./ui/normalaizeCreateCard";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import ccStyle from "../../css/CreateCard.module.css"
import {  useSelector } from "react-redux";
import ErrorPage from "../errorPage/ErrorPage";



const CreateCardPage = () => {
   const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const [createCardInputsValue, setCreateCardInputsValue] = useState({
    title: "",
    subtitle: "",
    description: "",
    phone: "",
    email: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: ""
  });
  const [errorsState, setErrorsState] = useState(null);
  const navigate = useNavigate()
  const handleMoveToHomePage = async () => {
    let normalizeData = normalaizeCreateCard(createCardInputsValue)
    let request= normalizeAxiosRequest(createCardInputsValue)
    try {
      const joiResponse = validateCreateCard(normalizeData);
      setErrorsState(joiResponse);
      if (joiResponse) return;
      let { data } = await axios.post("/cards", request);
      console.log(data);
      toast("You Create A New Card Successfully! 💚", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate(ROUTES.HOME);
    } catch (err) {
      console.log("kabel: ", err.response.data);
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
  const handleCreateCardInputsChange = (e) => {
    setCreateCardInputsValue((currentCreateCardInputsValue) => ({
      ...currentCreateCardInputsValue,
      [e.target.id]: e.target.value,
    }));
  };

  if(!userData){
    return(
    <ErrorPage/>
    )
  }

  return (
    <Box className={ccStyle.container}  >
      <Typography variant="h1" className={ccStyle.title}>Create Card</Typography>
      {Object.entries(createCardInputsValue).map(([key,value],index)=>(
        <Box key={index}>
        <TextField
        id={key}
        label={key.charAt(0).toUpperCase() + key.slice(1)}
        variant="outlined"
        type="text"
        value={value}
        onChange={handleCreateCardInputsChange}
        className={ccStyle.field}
        />
        {errorsState && errorsState[key] && (
        <Alert severity="warning">{errorsState[key]}</Alert>
      )}
        </Box>
      ))}

      <Button variant="contained" onClick={handleMoveToHomePage}>Create Card</Button>
    </Box>
  );
};

export default CreateCardPage;
