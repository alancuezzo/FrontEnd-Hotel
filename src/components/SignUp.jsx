import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import MessageApp from './MessageApp';
import { authSignUp } from '../helpers/ApiSignUp';


const SignUp = () => {

  const navigate = useNavigate();

  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);


  const [values, setValues] = useState({
    nombre: "",
    correo: "",
    password: "",
    edad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const usuario = {
      nombre: values.nombre,
      correo: values.correo,
      password: values.password,
      rol: "USER_ROLE",
      edad: values.edad,
    }

    const resp = await authSignUp(usuario);
    console.log(resp);

    setValues({
      nombre: "",
      correo: "",
      password: "",
      edad: "",
    });

    setResultado(resp);
    setLoading(false);

    navigate("/login")
  }
  return (
    <>
      <div className="container-fluid">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Registro</h1>
            <div className="input-box">
              <input type="text"
                placeholder='Nombre'
                id='signUpNombre'
                name="nombre"
                onChange={handleChange}
                value={values.nombre}
                minLength={2}
                maxLength={30}
                required
              />
              <i className="fa-solid fa-user"></i>
            </div>


            <div className="input-box">
              <input type="email"
                placeholder='Email'
                id='SignUpEMail'
                name="correo"
                onChange={handleChange}
                value={values.correo}
                maxLength={40}
                required
              />
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div className="input-box">
              <input type="password"
                placeholder='Contraseña'
                id='SignUpContraseña'
                name="password"
                onChange={handleChange}
                value={values.password}
                minLength="6"
                maxLength="20"
                required
              />
              <i className="fa-solid fa-lock"></i>
            </div>

            <div className="input-box">
              <input
                max={100}
                min={18}
                type="number"
                placeholder='Edad'
                id='SignUpEdad'
                name="edad"
                onChange={handleChange}
                value={values.edad}
                step={1}
                required
              />
              <i className="fa-regular fa-calendar"></i>
            </div>

            <div className="contenedor-boton">
              <button type='sumbit' className="btn" disabled={loading && true}>Registrarme</button>
            </div>

            <div className="register-link">
              <p>Ya tienes una cuenta? <NavLink to="/login">Login</NavLink> </p>
            </div>
            {resultado?.msg && (
              <MessageApp mensaje={resultado.msg} />
            )}
            {resultado?.error && (
              <MessageApp mensaje={resultado.error} />
            )}
          </form>

        </div>
      </div>
    </>
  )
}

export default SignUp
