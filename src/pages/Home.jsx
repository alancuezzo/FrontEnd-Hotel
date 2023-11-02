import React from "react";
import "../css/home.css";
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
          <div className="ofertas_cards">
            <CardsOffers/>
          </div>
        </div>

   
      </div>
    </>
  )
}

export default Home
