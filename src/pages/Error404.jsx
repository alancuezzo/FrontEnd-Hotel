import React from 'react';
import '../css/error404.css'; 

const Error404Page = () => {
  return (
    <>
        <div className="body_error">
        <div className="error404-container">
      <h1>PAGINA NO ENCONTRADA</h1>
      <h2>ERROR 404</h2>
      <button className="boton_logup">REGRESAME AL HOME</button>
    </div>
        </div>
    </>
  );
};

export default Error404Page;
