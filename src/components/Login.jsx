import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../helpers/ApiLogin";
import MessageApp from "../components/MessageApp";
import "../css/login.css";
import { NavLink } from "react-router-dom";


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

    if (resp?.token) {

      localStorage.setItem("token", JSON.stringify(resp.token));

      iniciarSesion();

      guardarUsuario(resp.usuario);


      setInputCorreo("");

      setInputPassword("");

      setLoading(false);

      Navigate("/");

      setResultado(resp);
    }



  };
  return (
    <>
      <div>
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
            <button type='sumbit' className="btn" disabled={loading && true}>login</button>
            <div className="register-link">
              <p>No tienes una cuenta?</p><NavLink to="/SignUp"> Registrarme</NavLink>
            </div>
          </form>

          {resultado?.msg && (
            <MessageApp mensaje={resultado.msg} />
          )}
        </div>
      </div >
    </>
  )
}

export default Login;
