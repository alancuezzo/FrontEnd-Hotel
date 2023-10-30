import React from "react";
import Login from "../components/Login"
import "../css/login.css";




const LoginSignUp = ({ iniciarSesion, guardarUsuario }) => {

  return (
    <Login iniciarSesion={iniciarSesion} guardarUsuario={guardarUsuario} />
  );
};

export default LoginSignUp;
