import React, { useEffect, useState } from 'react';
import Habitacion from '../components/Habitacion';
import { getHabitaciones } from '../helpers/HabitacionApi';
import "../css/habitacionespage.css";

const HabitacionesPage = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const fetchHabitaciones = async () => {
      try {
        const response = await getHabitaciones();
        if (response && Array.isArray(response.habitaciones)) {
          setHabitaciones(response.habitaciones);
        } else {
          console.error('La propiedad habitaciones en la respuesta de getHabitaciones no es un array:', response);
        }
      } catch (error) {
        console.error('Error al obtener las habitaciones', error);
      }
    };

    fetchHabitaciones();
  }, []);


return (
    <div className="container">
      <div id="slide">
        {habitaciones.map((habitacion, index) => (
          <div
            key={habitacion.id}
            className={`item ${index === 1 ? 'selected' : ''}`}
            style={{ backgroundImage: `url(${habitacion.imagen})` }}
          >
            {/* Resto del código */}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev">
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
  
        }
export default HabitacionesPage;
