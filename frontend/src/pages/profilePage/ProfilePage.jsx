import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import axios from "axios";
import { profilePageNormalizeData, profilePageNormalizeNewData } from "./ui/profilePageNormalizeData";
import { validateUpdateProfile } from "../../validation/profileUpdateValidation";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";
import ppStyle from "../../css/ProfilePage.module.css"
import ErrorPage from "../errorPage/ErrorPage";


const ProfilePage=()=>{
const userData = useSelector((bigPie) => bigPie.authSlice.userData);
const navigate = useNavigate();

const [userInfo,setUserInfo]= useState({
    first: "",
    middle: "",
    last: "",
    phone: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });
  const [requiredState,setrequiredState]=useState([true,false,true,true,false,false,false,true,true,true,true,false])
  const [errorsState, setErrorsState] = useState(null);

useEffect(()=>{
if(userData){
axios.get(`/users/${userData._id}`).then(({data})=>{
const showInfo= profilePageNormalizeData(data);
setUserInfo(showInfo);
}).catch((err)=>{
  console.log("error  is: ", err);
});
}
},[userData])

  const handleRegisterInputsChange = (e) => {
    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      [e.target.id]: e.target.value,
    }));
  };

  const handleUpdateInfo= async ()=>{
    let request = profilePageNormalizeNewData(userInfo);
    try {
        const joiResponse = validateUpdateProfile(userInfo);
        setErrorsState(joiResponse);
        if (joiResponse) return;
        let { data } = await axios.put(`/users/${userData._id}`, request);
        console.log("data", data);
      navigate(ROUTES.HOME);
       toast("You Update Your Profile Successfully! 💚", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
  }

  if(!userData){
    return(
    <ErrorPage/>
    )
  }
    return(  <Box className={ppStyle.container}>
      <Typography variant="h1" className={ppStyle.title}>My Profile</Typography>
      {Object.entries(userInfo).map(([key,value],index)=>(
        <Box key={index}>
        <TextField
        id={key}
        label={key.charAt(0).toUpperCase() + key.slice(1)}
        variant="outlined"
        type="text"
        value={value}
        onChange={handleRegisterInputsChange}
        required={requiredState[index]}
        className={ppStyle.field}
      />
      {errorsState && errorsState[key] && (
        <Alert severity="warning">{errorsState[key]}</Alert>
      )}
        </Box>
      ))}
      <Button variant="contained" onClick={handleUpdateInfo} >
        Update
      </Button>
    </Box>
);
}

export default ProfilePage;