import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import { useEffect } from "react";


const useAutoLogin = () => {
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const dispatch = useDispatch();
  useEffect(()=>{
 const token = localStorage.getItem("token");
  if (!token) return;
  const dataFromToken = jwtDecode(token);
  axios
    .get(`/users/${dataFromToken._id}`)
    .then(({ data }) => {
      const user = authActions.login(jwtDecode(token));
      dispatch(user);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])
 
};

export default useAutoLogin;
