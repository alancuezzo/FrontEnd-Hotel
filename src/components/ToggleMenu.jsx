import React, { useState } from "react";
import { Link } from "react-router-dom"
import "../css/togglemenu.css";

const ToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <div className="logo">Tu Logo</div>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu ${isOpen ? "active" : ""}`}>
          <li><a href="#">Iniciar Sesión</a></li>
          <li><a href="#">Registro</a></li>
          <li><a href="#">Habitaciones</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Nosotros</a></li>
        </ul>
        <button className="boton_login">
          <Link to="#">RESERVAR AHORA</Link>
        </button>
      </nav>
    );
  };
  