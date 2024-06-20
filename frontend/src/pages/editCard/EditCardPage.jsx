import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { normalizeEditCardData } from "./ui/normalizeEditCardData";
import { normalaizeCreateCard, normalizeAxiosRequest } from "../createCard/ui/normalaizeCreateCard";
import { validateCreateCard } from "../../validation/createCardValidation";
import { toast } from "react-toastify";
import ROUTES from "../../routes/ROUTES";
import ecStyle from "../../css/EditCardPage.module.css"

const EditCardPage = () => {
  const { id } = useParams();
  const [editCardInputsValue, setEditCardInputsValue] = useState({
    title: "",subtitle: "",description: "",phone: "",email: "",url: "",
    alt: "",state: "",country: "",city: "",street: "",houseNumber: "",
    zip: ""});
  const [errorsState, setErrorsState] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`cards/${id}`)
      .then(({ data }) => {
        const normalizeData=normalizeEditCardData(data);
        setEditCardInputsValue(normalizeData);
      })
      .catch((err) => {
        console.log("error is: ", err);
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
      });
  }, []);
  const handleEditCardInputsChange = (e) => {
    setEditCardInputsValue((currentEditCardInputsValue) => ({
      ...currentEditCardInputsValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSaveNewCardData= async ()=>{
    let normalizeData = normalaizeCreateCard(editCardInputsValue)
    let request= normalizeAxiosRequest(editCardInputsValue)
    try {
       const joiResponse = validateCreateCard(normalizeData);
      setErrorsState(joiResponse);
      if (joiResponse) return;
      let { data: newData } = await axios.put(`/cards/${id}`, request);
      console.log("kabel et a: ",newData);
        toast("You Update Your Card Successfully! 💚", {
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
      console.log("the error is: ", err);
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
  }

  return (
   <Box className={ecStyle.container} >
      <Typography variant="h1" className={ecStyle.title}>Edit Card</Typography>
      {Object.entries(editCardInputsValue).map(([key,value],index)=>(
        <Box key={index}>
        <TextField
        id={key}
        label={key.charAt(0).toUpperCase() + key.slice(1)}
        variant="outlined"
        type="text"
        value={value}
        onChange={handleEditCardInputsChange}
        className={ecStyle.field}
        />
        {errorsState && errorsState[key] && (
        <Alert severity="warning">{errorsState[key]}</Alert>
      )}
        </Box>
      ))}
      <Button variant="contained" onClick={handleSaveNewCardData}>Update Card</Button>
    </Box>
  );
};
export default EditCardPage;
