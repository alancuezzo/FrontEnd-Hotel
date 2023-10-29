import React from "react";
// import "../css/home.css";
import videoIntro from "../assets/VideoHome/VideoIntro.mp4"

const Home = () => {
  return (
    <>
      <div className="fondovideo">
        <video src={videoIntro} autoPlay loop muted />
        <div class="capa"></div>
      </div>
      <div className="lala">LALA</div>
    </>
  )
}

export default Home
