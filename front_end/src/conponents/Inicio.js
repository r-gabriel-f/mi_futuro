import React from "react";
import persona from "../assets/img/persona.png"
import { Nosotros } from "./Nosotros";
export const Inicio = () => {
  return (
    <section className="bg-[]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen w-full">
        <div className="flex items-center justify-center flex-col m-10">
          <h1 className="text-4xl font-serif text-justify">
            Realiza tu software y lleva tu negocio al siguiente nivel con
            soluciones innovadoras y a medida.
          </h1>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10">
            Contactar
          </button>
        </div>
        <div className="flex items-center justify-center mt-auto">
          <img src={persona} alt="persona"></img>
        </div>
      </div>
      <Nosotros></Nosotros>
    </section>
  );
};
