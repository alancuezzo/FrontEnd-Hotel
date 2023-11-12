import React from "react";
import "../css/detalleshabitacion.css";

const DetalleHabitacionPage = ({ habitacion }) => {
  return (
    <div>
      <div className="div-imagen">
        <div className="div-contenedor">
          <h1>{habitacion.nombreHotel}</h1>
          <h2>{habitacion.nombre}</h2>
        </div>
      </div>

      <div className="fondo-negro">
        <p className="parrafo-blanco">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi ipsam consequatur, nihil ut mollitia?</p>
        <h3>Comodidades</h3>
        <ul>
          <li>Comodidad 1</li>
          <li>Comodidad 2</li>
          <li>Comodidad 3</li>
          <li>Comodidad 4</li>
          <li>Comodidad 5</li>
          <li>Comodidad 6</li>
        </ul>

        <h3>Instalaciones</h3>
        {/* Carrusel o fotos no se */}

        <div className="buttons">
          <button>RESERVAR AHORA</button>
        </div>

        <h3>Datos de la habitación</h3>
        <ul>
          <li>Dato 1</li>
          <li>Dato 2</li>
          <li>Dato 3</li>
          <li>Dato 4</li>
          <li>Dato 5</li>
          <li>Dato 6</li>
          <li>Dato 7</li>
        </ul>
      </div>
    </div>
  );
};

export default DetalleHabitacionPage;
