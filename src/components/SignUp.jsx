import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
// import { Registrar } from "../helpers/ApiSignUp"
import Swal from 'sweetalert2';
const SignUp = () => {

  const url = "https://localhost:8080/api/usuarios";

  const { register, formState: { errors }, handleSubmit, reset } = useForm();



  const Registrar = async (datos) => {
    const usuario = {
      nombre: data.signUpNombre,
      correo: data.signUpEmail,
      password: data.signUpContraseña,
      edad: data.signUpEdad,
    }
    try {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const datos = await resp.json();
      return datos;
    } catch (error) {
      alert(error);
      return Swal.fire("Hubo Un Error En El Servidor, Porfavor Intente En Otro Momento")
    }

  }

  return (
    <>

      <div className="wrapper">
        <form onSubmit={handleSubmit(Registrar)}>
          <h1>Registro</h1>
          <div className="input-box">
            <input type="text"
              placeholder='Nombre'
              id='signUpNombre'
              {...register("signUpNombre",
                {
                  required: true, minLength: 2, maxLength: 30, pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
                })} />
            <i className="fa-solid fa-user"></i>
            {errors.signUpNombre?.type === "required" && (
              <div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Debe Ingresar Un Nombre!</span>
              </div>
            )}
            {errors.signUpNombre?.type === "minLength" && (
              <div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Debe tener minimo de 2 caracteres!</span>
              </div>
            )}
            {errors.signUpNombre?.type === "maxLength" && (
              <div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Debe tener un maximo de 25 caracteres!</span>
              </div>
            )}
            {errors.signUpNombre?.type === "pattern" && (
              <div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Nombre Debe Contener Solo Letras!</span>
              </div>
            )}

          </div>

          <div className="input-box">
            <input type="email"
              placeholder='Email'
              id='SignUpEMail'
              {...register("signUpEmail", {
                required: true, maxLength: 40, pattern: /\S+@\S+\.\S+/
              })} />
            <i className="fa-solid fa-envelope"></i>
            {errors.signUpEmail?.type === "pattern" && (
              <div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Ingrese Un Mail Valido</span>
              </div>
            )}
            {errors.signUpEmail?.type === "required" && (
              <div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Debe Ingresar Un Email</span>
              </div>
            )}
            {errors.signUpEmail?.type === "maxLength" && (
              <div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Debe Tener Un Maximo De 40 Caracteres!</span>
              </div>
            )}
          </div>
          <div className="input-box">
            <input type="password"
              placeholder='Contraseña'
              id='SignUpContraseña'
              {...register("signUpContraseña", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^.{6,20}$/
              })} />
            <i className="fa-solid fa-lock"></i>
            {errors.signUpContraseña?.type === "required" &&
              (<div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Debe Ingresar Una Contraseña!</span>
              </div>)}

            {errors.signUpContraseña?.type === "minLength" &&
              (<div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Debe Tener Un Minimo De 6 Caracteres!</span>
              </div>)}

            {errors.signUpContraseña?.type === "maxLength" &&
              (<div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Debe Tener Un Maximo De 12 Caracteres!</span>
              </div>)}
            {errors.signUpContraseña?.type === "pattern" &&
              (<div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Debe Tener Un Minimo De 4 Y Un Maximo De 12 Caracteres!</span>
              </div>)}

          </div>
          <div className="input-box">
            <input
              type="number"
              step={1}
              min="18"
              max="100"
              placeholder='Edad'

              {...register("signUpEdad", {
                required: true,
              })}
            />
            {errors.signUpEdad?.type === "required" && (
              <div className='d-flex justify-content-center mt-1 text-warning'>
                <span >Debe Ingresar Una Edad!</span>
              </div>
            )}
            <i className="fa-regular fa-calendar"></i>
          </div>
          <button type='sumbit' className="btn">Registrarme</button>
          <div className="register-link">
            <p>Ya tienes una cuenta?  <Link to="#"> Login</Link></p>
          </div>
        </form>
      </div>

    </>
  )
}

export default SignUp
