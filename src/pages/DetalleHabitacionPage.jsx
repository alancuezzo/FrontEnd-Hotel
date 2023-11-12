// DetalleHabitacionPage.jsx
import React from 'react';

const DetalleHabitacionPage = ({ habitacion }) => {
  return (
    <div>
      <h1>Detalles de la Habitación</h1>
      <h2>{habitacion.nombre}</h2>
      <p>{habitacion.descripcion}</p>
      {/* Agrega aquí más detalles de la habitación si es necesario */}
    </div>
  );
};

export default DetalleHabitacionPage;
