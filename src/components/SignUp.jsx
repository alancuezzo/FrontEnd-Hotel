import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Registrar } from "../helpers/ApiSignUp"
import { validarTexto } from '../validators/validarTexto';
import Swal from 'sweetalert2';
const SignUp = () => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();



  return (
    <>
      <div>
        <div className="wrapper">
          <form onSubmit={handleSubmit(Registrar)}>
            <h1>Registro</h1>
            <div className="input-box">
              <input type="text"
                placeholder='Nombre y apellido'
                id='SignUpNombre'
                {...register("signUpNombre",
                  {
                    required: true, minLength: 2, maxLength: 30,
                  })} />
              <i className="fa-solid fa-user"></i>
              {errors.signUpNombre?.type === "required" && (
                <div className='d-flex justify-content-center mt-1 text-warning'>
                  <span >El Nombre Es Obligatorio!</span>
                </div>
              )}
              {errors.signUpNombre?.type === "minLength" && (
                <div className='d-flex justify-content-center mt-1 text-warning'>
                  <span >Nombre tiene un minimo de 2 caracteres</span>
                </div>
              )}
            </div>

            <div className="input-box">
              <input type="email"
                placeholder='Email'
                id='SignUpMail'
                {...register("signUpEmail", {
                  required: true,
                })} />
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password"
                placeholder='Contraseña'
                id='SignUpContraseña'

                {...register("signUpContraseña", {
                  required: true,
                  minLength: 8,
                  maxLength: 30,
                })} />
              <i className="fa-solid fa-lock"></i>
            </div>
            <div className="input-box">
              <input
                type="number"
                step={1}
                min="18"
                max="100"
                minLength={2}
                maxLength={3}
                placeholder='Edad'

                {...register("signUpEdad", {
                  required: true,
                })}
              />
              <i className="fa-regular fa-calendar"></i>
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
