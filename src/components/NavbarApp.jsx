import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/GOLDEN_LOGO.png";
import "../css/navbar.css";

const NavBar = () => {
    return (
        <>
            <div className="navbar1">
                <div className="nav_superior">
                    <Link to="*">ACCESO</Link>
                    <Link to="*">ÚNETE AHORA</Link>
                </div>
                <div className="nav_inferior">
                    <div className="logo">
                        <img src={logo} alt="Logo del hotel"/>
                    </div>
                    <ul className="nav_links">
                        <li><NavLink to="*">GALERIA</NavLink>
                        </li>
                        <li>HABITACIONES
                            <ul className="submenu">
                                <li><NavLink to="*">SIMPLES</NavLink></li>
                                <li><NavLink to="*">DOBLES</NavLink></li>
                                <li><NavLink to="*">EJECUTIVAS</NavLink></li>
                                <li><NavLink to="*">PREMIUM</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="*">OFERTAS</NavLink></li>
                        <li>SERVICIOS
                            <ul className="submenu">
                                <li><NavLink to="*">SPA</NavLink></li>
                                <li><NavLink to="*">RESTAURANT</NavLink></li>
                                <li><NavLink to="*">GIMNASIO</NavLink></li>
                                <li><NavLink to="*">EVENTOS</NavLink></li>
                            </ul> 
                        </li>
                        <li>NOSOTROS
                            <ul className="submenu">
                                <li><NavLink to="*">EQUIPO DE TRABAJO</NavLink></li>
                                <li><NavLink to="*">CONTACTO</NavLink></li>
                                <li><NavLink to="*">UBICACION</NavLink></li>
                                <li><NavLink to="*">PREGUNTAS FRECUENTES</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="boton_login">
                        <Link>RESERVAR AHORA</Link>
                    </button>
                </div>
                <div></div>
            </div>
            <div className="navbar2">
            <section class="mb-3">
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler second-button" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarToggleExternalContent10"
        aria-controls="navbarToggleExternalContent10" aria-expanded="false"
        aria-label="Toggle navigation">
        <div class="animated-icon2"><span></span><span></span><span></span><span></span></div>
      </button>
    </div>
  </nav>
  <div class="collapse" id="navbarToggleExternalContent10">
    <div class="bg-light shadow-3 p-4">
      <button class="btn btn-link btn-block border-bottom m-0">Link 1</button>
      <button class="btn btn-link btn-block border-bottom m-0">Link 2</button>
      <button class="btn btn-link btn-block m-0">Link 3</button>
    </div>
  </div>
</section>
            </div>

        </>
    )
};

export default  NavBar;