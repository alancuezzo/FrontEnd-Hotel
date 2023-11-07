import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { authSignUp } from '../helpers/ApiSignUp';

const SignUp = () => {
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
  const url = "https://localhost:8080/api/usuarios";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = {
      nombre: values.nombre,
      correo: values.correo,
      password: values.password,
      rol: "ADMIN_ROLE",
      edad: values.edad,
    }
    console.log(usuario);
    const resp = await authSignUp(usuario);
    console.log(resp);
  }
  return (
    <>

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
              type="number"
              step={1}
              min={18}
              max={100}
              placeholder='Edad'
              name="edad"
              onChange={handleChange}
              value={values.edad}
              required
            />
            <i className="fa-regular fa-calendar"></i>
          </div>
          <button type='sumbit' className="btn">Registrarme</button>
          <div className="register-link">
            <p>Ya tienes una cuenta?  <Link to="/login"> Login</Link></p>
          </div>
        </form>
      </div>

    </>
  )
}

export default SignUp
