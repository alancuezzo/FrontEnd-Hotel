import React from "react";
import "../css/admin.css";
// import { traerUsuarios } from "../helpers/AdminApi";

const Admin = () => {
    let contenido = document.getElementById('contenido');

    const cambiarContenido = (pagina) => {


        switch (pagina) {
            case 'habitaciones':
                contenido.innerHTML = '<p>Contenido de Habitaciones</p>';
                break;
            case 'usuarios':
                contenido.innerHTML = '<p>Contenido de Usuarios</p>';
                break;
            case 'reservas':
                contenido.innerHTML = '<p>Contenido de Reservas</p>';
                break;
            default:
                contenido.innerHTML = '<p>Selecciona una pestaña para ver el contenido.</p>';
                break;
        }
    };

    return (
        <div className="contenedor_body">
            <div className="contenedor_header">
                <h1>Panel de Administración</h1>
            </div>

            <div className="opciones">
                <button onClick={() => cambiarContenido('habitaciones')}>Habitaciones</button>
                <button onClick={() => cambiarContenido('usuarios')}>Usuarios</button>
                <button onClick={() => cambiarContenido('reservas')}>Reservas</button>
            </div>

            <section id="contenido">
                <p>Selecciona una pestaña para ver el contenido.</p>
            </section>
        </div>
    );
}

export default Admin;
