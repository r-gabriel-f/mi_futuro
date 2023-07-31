import React from "react";
import "../style/Inicio.css";
import i from "../assests/img/fondo.png";
export const Inicio = () => {
  return (
    <section className="container-inicio">
      <div className="contenido-inicio">
        <div className="detalle-inicio">
          <h1>Servicios de desarrollo de software</h1>
        </div>
        <div className="img-inicio">
          <img src={i} id="img-fondo" alt="Descripción de la imagen"></img>
        </div>
      </div>
    </section>
  );
};
