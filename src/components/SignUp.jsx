import React from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div>
        <div className="wrapper">
          <form>
            <h1>Registro</h1>
            <div className="input-box">
              <input type="text" placeholder='Nombre y apellido' id='SignUpNombre' required />
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="input-box">
              <input type="email" placeholder='Email' id='SignUpMail' required />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder='Contraseña' id='SignUpContraseña' required />
              <i className="fa-solid fa-lock"></i>
            </div>

            <div className="input-box">
              <input type="password" placeholder='Repetir Contraseña' id='SignUpContraseña2' required />
              <i className="fa-solid fa-lock"></i>
            </div>
            <div className="input-box">
              <input type="number" placeholder='18' id='SignUpEdad' required maxLength={120} minLength={18} />
              <i className="fa-solid fa-lock"></i>
            </div>
            <button type='sumbit' className="btn">Registrarme</button>
            <div className="register-link">
              <p>Ya tienes una cuenta?  <Link to="#"> Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
