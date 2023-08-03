import React from "react";
import nos from "../assets/img/dispositivos.png";
export const Nosotros = () => {
  return (
    <section className="bg-[#0F172A] bg-fondo-color flex flex-col ">
      <div className=" space-y-4 mx-10 mt-10">
        <h2 className="text-4xl text-[#2C928D]">Sobre Nosotros</h2>
        <p className="text-base text-justify text-[#DAF7F4]">
          FlowSoft es una empresa de desarrollo de software, enfocada en
          agilizar procesos y optimizar operaciones en diversas industrias y
          para nuestros clientes. Buscamos ofrecer soluciones tecnológicas
          innovadoras y eficientes que impulsen el crecimiento y la
          competitividad de nuestros clientes. Pero no solo se trata de la
          tecnología, nuestra mayor motivación es brindar oportunidad a todas
          las personas a demostrar su talento.
        </p>
        <p className="text-base text-justify text-[#DAF7F4]">
          Visualizamos un mundo donde el talento y la creatividad de todas las
          personas son reconocidos y valorados. Queremos ser líderes en el
          desarrollo de software, no solo por la calidad de nuestros productos,
          sino también por ser un referente en la promoción de la diversidad e
          inclusión en la industria tecnológica
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10">
        <div className="flex items-center justify-center">
          <img src={nos} alt="persona"></img>
        </div>
        <div className="items-center justify-center m-10">
          <h2 className="text-4xl text-[#2C928D]">Por qué elegirnos</h2>

          <div className=" mt-10">
            <div className="flex ml-0 mt-10 md:ml-10 ">
              <div className="mr-2 md:mr-10">
                <ion-icon
                  name="person-circle-outline"
                  class="w-10 h-10 text-[#2C928D]"
                ></ion-icon>
              </div>
              <div className="text-justify md:mr-20">
                <h6 className="text-lg text-[#2C928D]">Enfoque personalizado</h6>
                <p className="mt-2 text-sm text-[#DAF7F4]">
                  Comprendemos que cada empresa tiene requisitos únicos y un
                  enfoque personalizado es esencial para desarrollar un software
                  exitoso. Trabajamos en estrecha colaboración con nuestros
                  clientes para entender sus objetivos y desafíos,
                  permitiéndonos ofrecer soluciones a medida que se ajusten
                  perfectamente a sus necesidades y presupuesto.
                </p>
              </div>
            </div>

            <div className="flex ml-0 mt-10 md:ml-10 ">
              <div className="mr-2 md:mr-10">
                <ion-icon
                  name="ribbon-outline"
                  class="w-10 h-10 text-[#2C928D]"
                ></ion-icon>
              </div>
              <div className="text-justify  md:mr-20">
                <h6 className="text-lg text-[#2C928D]">Calidad y seguridad</h6>
                <p className="mt-2 text-sm text-[#DAF7F4]">
                  Nuestra prioridad es entregar software de alta calidad,
                  confiable y seguro. Seguimos rigurosos procesos de desarrollo,
                  pruebas y verificación para garantizar que el producto final
                  sea robusto y libre de errores. Además, implementamos las
                  mejores prácticas en materia de seguridad para proteger sus
                  datos y mantener la confidencialidad de su negocio.
                </p>
              </div>
            </div>

            <div className="flex ml-0 mt-10 md:ml-10 ">
              <div className="mr-2 md:mr-10">
                <ion-icon
                  name="medical-outline"
                  class="w-10 h-10 text-[#2C928D]"
                ></ion-icon>
              </div>
              <div className="text-justify md:mr-20">
                <h6 className="text-lg text-[#2C928D]">Soporte continuo</h6>
                <p className="mt-2 text-sm text-[#DAF7F4]">
                  Nuestra relación con el cliente no termina después de entregar
                  el software. Brindamos un soporte continuo para asegurarnos de
                  que el software funcione de manera óptima y se mantenga
                  actualizado en todo momento. Estamos disponibles para resolver
                  cualquier consulta, ofrecer capacitación y realizar mejoras
                  según sea necesario para asegurar la satisfacción y el éxito a
                  largo plazo de su empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
