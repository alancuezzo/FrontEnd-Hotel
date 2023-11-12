import React, { useEffect, useState } from 'react';
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

    // Agrega eventos después de que el componente se haya montado y el DOM esté disponible
    document.getElementById('next').onclick = function () {
      let lists = document.querySelectorAll('.item');
      let clone = lists[0].cloneNode(true);
      document.getElementById('slide').appendChild(clone);
    };

    document.getElementById('prev').onclick = function () {
      let lists = document.querySelectorAll('.item');
      let clone = lists[lists.length - 1].cloneNode(true);
      document.getElementById('slide').prepend(clone);
    };
  }, []); 

  return (
    <>
      <div className="contenedor_habitacion">
        <div className="container">
          <div id="slide">
            {habitaciones.map((habitacion, index) => (
              <div
                key={habitacion.id}
                className={`item ${index === 1 ? 'selected' : ''}`}
                style={{ backgroundImage: `url(${habitacion.imagen})` }}
              >
                {/* Puedes agregar aquí más contenido para cada habitación si lo necesitas */}
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
      </div>
    </>
  );
};

export default HabitacionesPage;
