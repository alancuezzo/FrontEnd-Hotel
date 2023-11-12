// components/Habitacion.jsx

import React from 'react';

const Habitacion = ({ habitacion }) => {
  return (
    <div className="habitacion">
      <img src={habitacion.imagen} alt={habitacion.nombre} />
      <h2>{habitacion.nombre}</h2>
      <p>{habitacion.descripcion}</p>
      <button>RESERVAR</button>
    </div>
  );
};

export default Habitacion;
