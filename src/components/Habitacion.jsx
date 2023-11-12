// components/Habitacion.jsx

import React from 'react';

const Habitacion = ({ habitacion }) => {
  // 'habitacion' es un objeto que contiene información sobre la habitación específica
  // Puedes acceder a sus propiedades, por ejemplo, habitacion.nombre, habitacion.descripcion, etc.

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
