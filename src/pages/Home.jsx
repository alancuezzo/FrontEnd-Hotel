import React from "react";
import "../css/home.css";
import videoIntro from "../assets/VideoHome/VideoIntro2.mp4"
import ActiveSlider from "../components/ActiveSlider";

const Home = () => {
  return (
    <>
      <div className="fondovideo">
        <video src={videoIntro} autoPlay loop muted />
        <div class="capa"></div>
      </div>
      <div className="cardsOfertas">
        <div className="ofertas">
          <h3>OFERTAS</h3>
          <h2>Para nuestros valiosos invitados</h2>
          <ActiveSlider/>
        </div>
   
      </div>
    </>
  )
}

export default Home
