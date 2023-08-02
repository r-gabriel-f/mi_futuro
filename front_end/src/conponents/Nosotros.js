import React from "react";
import nos from "../assets/img/nosotros.png";
export const Nosotros = () => {
  return (
    <section className="bg-[#589] flex flex-col ">
      <div className=" space-y-4 mx-10 md:mx-20 mt-10">
        <h1 className="text-4xl">Sobre Nosotros</h1>
        <p className="text-base text-justify">
          FlowSoft es una empresa de desarrollo de software, enfocada en
          agilizar procesos y optimizar operaciones en diversas industrias y
          para nuestros clientes. Buscamos ofrecer soluciones tecnológicas
          innovadoras y eficientes que impulsen el crecimiento y la
          competitividad de nuestros clientes. Pero no solo se trata de la
          tecnología, nuestra mayor motivación es brindar oportunidad a todas
          las personas a demostrar su talento.
        </p>
        <p className="text-base text-justify">
          Visualizamos un mundo donde el talento y la creatividad de todas las
          personas son reconocidos y valorados. Queremos ser líderes en el
          desarrollo de software, no solo por la calidad de nuestros productos,
          sino también por ser un referente en la promoción de la diversidad e
          inclusión en la industria tecnológica
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10">
        <div className="flex items-center justify-center mt-auto">
          <img src={nos} alt="persona"></img>
        </div>
        <div className="flex items-center justify-center m-10">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10">
            Contactar
          </button>
          <h1 className="text-4xl font-serif text-justify mr-20">
            Realiza tu software y lleva tu negocio al siguiente nivel con
            soluciones innovadoras y a medida.
          </h1>
        </div>
      </div>
    </section>
  );
};
