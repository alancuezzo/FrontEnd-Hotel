import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../helpers/ApiLogin";
import MessageApp from "../components/MessageApp";
// import Swal from 'sweetalert2'
import "../css/login.css";


const Login = ({ iniciarSesion, guardarUsuario }) => {

  const Navigate = useNavigate();

  const [inputCorreo, setInputCorreo] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const datos = {
      correo: inputCorreo,
      password: inputPassword,
    };

    const resp = await authLogin(datos);
    console.log(resp);

    setResultado(resp);

    console.log(resultado);

    if (resp?.token) {

      localStorage.setItem("token", JSON.stringify(resp.token));

      iniciarSesion();

      guardarUsuario(resp.usuario);

      Navigate("/");
    }

    setInputCorreo("");

    setInputPassword("");

    setLoading(false);
  };
  return (

    <div className="container-fluid">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder='Correo' id='loginMail'
              value={inputCorreo}
              onChange={(e) => setInputCorreo(e.target.value)}
              required />
            <span><i className="fa-solid fa-user"></i></span>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Contraseña' id='loginContraseña'
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              required />
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Recordarme</label>
            <NavLink to="*">Restablecer Contraseña</NavLink>
          </div>
          <div className="contenedor-boton">
            <button type='sumbit' className="btn" disabled={loading ? true : false} onSubmit={handleLogin}>Login</button>
          </div>
          <div className="register-link">
            <p>No tienes una cuenta?</p><NavLink to="/SignUp"> Registrarme</NavLink>
          </div>
        </form>
        <div id="mensajeResp">
          {resultado ? (
            <div className="mt-2">
              <MessageApp mensaje={resultado.msg} />
            </div>
          ) : ""}

        </div>
      </div>
    </div >
  )
}

export default Login;
