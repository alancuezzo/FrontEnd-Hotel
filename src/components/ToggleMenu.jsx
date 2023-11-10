import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/togglemenu.css';

const ToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="toggle-menu">
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li>
              <Link to="/">INICIAR SESIÓN</Link>
            </li>
            <li>
              <Link to="/">REGISTRO</Link>
            </li>
            <li>
              <Link to="/">GALERIA</Link>
            </li>
            <li>
              <Link to="/">HABITACIONES</Link>
            </li>
            <li>
              <Link to="/">SERVICIOS</Link>
            </li>
            <li>
              <Link to="/">NOSOTROS</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
