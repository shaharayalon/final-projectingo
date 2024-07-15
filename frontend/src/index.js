import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import store from "./store/bigPie";
import { Provider } from "react-redux";



axios.defaults.baseURL = 'http://localhost:8080/api/v1';
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    /*
      if token exists we edit the request
      adding headers
      and sending the request to the server
    */
    config.headers["x-auth-token"] = token;
    /*
      headers = {
        x-auth-token:token
      }
    */
  }else{
    const sessionToken= sessionStorage.getItem("token");
     if(sessionToken){
     config.headers["x-auth-token"] = sessionToken;
     }
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
