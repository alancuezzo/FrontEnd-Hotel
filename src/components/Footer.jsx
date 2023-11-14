import React from "react";
import "../css/footer.css";
import Logo from "../assets/GOLDEN_LOGO.png"
// import Logo from "../assets/LogoBlanco.png"
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";

const Footer = () => {
return (
    <>
        <div className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <img className="footer-logo" src={Logo} alt="logo" />
                </div>
                <div className="box">
                    <ul>
                        <li><Link to="*">ACERCA DE GOLDEN PALACE</Link></li>
                        <li><Link to="*">DESARROLLO HOTELERO</Link></li>
                        <li><Link to="*">CENTRO DE PRENSA</Link></li>
                        <li><Link to="*">CARRERAS</Link></li>
                        <li><Link to="*">PREGUNTAS FRECUENTES</Link></li>
                        <li><Link to="*">POLITICAS DE PRIVACIDAD</Link></li>
                        <li><Link to="*">TÉRMINOS Y CONDICIONES</Link></li>
                        <li><Link to="*">AVISO DE COOKIES</Link></li>
                    </ul>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; COPYRIGHT <b>Golden Palace</b> - International LLC 2023.</small>
            </div>
        </div>
    </>
)
}

export default Footer
