import React from "react";
import "../css/home.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/GOLDEN_LOGO.png";
import videoIntro from "../assets/VideoHome/VideoIntro2.mp4"
import CardsOffers from "../components/CardsOffers";

const Home = () => {
  return (
    <>
      <div className="fondovideo">
        <video src={videoIntro} autoPlay loop muted />
        <div className="capa"></div>
      </div>
      <div className="ofertas">
        <div className="ofertas_titulo">
          <h3>OFERTAS</h3>
          <h2>Para nuestros valiosos invitados</h2>
        </div>
      </div>
      <CardsOffers/>
      <div className="banner">
        {/* <img src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/article/stories/dubai/15-amazing-facts-about-the-burj-al-arab/burj-al-arab-jumeirah-terrace-aerial-drone_16-9.jpg" alt="" /> */}
        {/* <img src="https://www.travoh.com/wp-content/uploads/2021/11/010-Burj-Al-Arab-Jumeirah-Hotel-Dubai-UAE-Burj-Al-Arab-Terrace-Overhead.jpg" alt="" /> */}
        <img src="https://www.itl.cat/pngfile/big/227-2270776_dubai-burj-al-arab.jpg" alt="" />
        <div className="capa_banner"></div>
        <div className="descripcion_banner">
          <div className="banner_texto">
            <h2>MEMBRESÍA GOLDEN</h2>
            <h4>PROGRAMA DE FIDELIZACIÓN</h4>
            <h3>Únase a la familia Golden Palace</h3>
            <p>Haga que los momentos con Golden Palace sean aún más especiales y placenteros con beneficios exclusivos para nuestros miembros.</p>
            <div className="banner_boton">
                <button className="boton_logup">
                        <a>ÚNETE AHORA</a>
                </button>
                <button className="boton_login">
                        <a>ACCESO</a>
                </button>
        </div>
          </div>
          <div className="logo">
            <img src={logo} alt="Logo del hotel" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
