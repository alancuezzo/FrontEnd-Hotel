import React from "react";
import "../css/footer.css";
import Logo from "../assets/GOLDEN_LOGO.png"
import { Link } from "react-router-dom";

const Footer = () => {
return (
    <>
        <div className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
            <img className="footer-logo" src={Logo} alt="logo" />
          </div>
            <div className="box">
                <h2>CONTACTÁNOS</h2>
                <p>lalalala</p>
                <p>+lalalalalal</p>
            </div>
            <div className="box">
                <h2>SEGUINOS EN NUESTRAS REDES!</h2>
                <div className="red-social">
                    <Link to="https://www.facebook.com/" className="fa fa-facebook"></Link>
                    <Link to="https://www.instagram.com/" className="fa fa-instagram"></Link>
                    <Link to="https://twitter.com/?lang=es" className="fa fa-twitter"></Link>
                    <Link to="https://www.youtube.com/" className="fa fa-youtube"></Link>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2023 <b>Golden Palace</b> - Todos los Derechos Reservados.</small>
        </div>
        </div>
    </>
)
}

export default Footer
