import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect } from "react";
import ROUTES from "../../routes/ROUTES";
import { authActions } from "../../store/authSlice";
import { useSelector } from "react-redux";



const Logout=  ()=>{

const userData = useSelector((bigPie) => bigPie.authSlice.userData);
const navigate = useNavigate();
  const dispatch = useDispatch();

useEffect(()=>{
    dispatch(authActions.logout());
    localStorage.setItem("token", "");
    sessionStorage.setItem("token","");
    navigate(ROUTES.HOME);  
},[userData]);


    return<Fragment></Fragment>


  
}

export default Logout;