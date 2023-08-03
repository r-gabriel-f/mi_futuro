import React from "react";
import comercial from "../assets/img/comercial.jpg";
import facturacion from "../assets/img/facturacion.jpg";
import software from "../assets/img/software.jpg";
import web from "../assets/img/web.jpg";
import matenimiento from "../assets/img/matenimiento.jpg";

export const Servicios = () => {
  return (
    <div className="flex flex-col mb-10">
      <div className=" space-y-4 mx-10 mt-10">
        <h2 className="text-4xl">Nuestros servicios</h2>
        <p className="text-base text-justify">
        Nuestros servicios se enfocan en el desarrollo web y software
        personalizado para diferentes tipos de negocios e empresas. Nos
        especializamos en crear soluciones a medida que se adapten perfectamente
        a las necesidades de tu negocio. Ya sea que estés buscando una página
        web moderna y funcional o un software específico para optimizar tus
        procesos internos, estamos aquí para ayudarte.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10">
        <div className="flex-col items-center justify-center items-center flex ">
          <img
            src={comercial}
            alt="persona"
            className="w-3/4 h-4/5 md:w-2/4 md:h-4/5 hover:scale-110 rounded "
          ></img>
          <p className="mt-3">SOFTWARE COMERCIAL</p>
        </div>
        <div className="flex-col items-center justify-center items-center flex ">
          <img
            src={facturacion}
            alt="persona"
            className="w-3/4 h-4/5 md:w-2/4 md:h-4/5 hover:scale-110 rounded "
          ></img>
          <p className="mt-3">SISTEMAS DE FACTURACION</p>
        </div>

        <div className="flex-col items-center justify-center items-center flex ">
          <img
            src={software}
            alt="persona"
            className="w-3/4 h-4/5 md:w-2/4 md:h-4/5 hover:scale-110 rounded "
          ></img>
          <p className="mt-3">DESARROLLO DE SOFTWARE</p>
        </div>
        <div className="flex-col items-center justify-center items-center flex ">
          <img
            src={web}
            alt="persona"
            className="w-3/4 h-4/5 md:w-2/4 md:h-4/5 hover:scale-110 rounded "
          ></img>
          <p className="mt-3">DESARROLLO DE PAGINAS WEB</p>
        </div>
      </div>
    </div>
  );
};
