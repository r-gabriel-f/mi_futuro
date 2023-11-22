import React from "react";
import comercial from "../assets/img/comercial.webp";
import facturacion from "../assets/img/facturacion.webp";
import software from "../assets/img/software.webp";
import web from "../assets/img/web.webp";
import { Baner } from "./Baner";

export const Servicios = () => {
  return (
    <section className="flex flex-col mt-16">
      <div
        id="whatsapp-float"
        className="fixed bottom-1 right-4 bg-[#25d366] py-2 px-2 rounded-full cursor-pointer z-1"
      >
        <a href="https://wa.link/nf9ygt" target="_banks">
          <ion-icon
            name="logo-whatsapp"
            class="w-10 h-10 text-[#ffff] hover:scale-110"
          ></ion-icon>
        </a>
      </div>
      <div className=" space-y-4 mx-10 mt-10">
        <h2 className="text-4xl">Nuestros servicios</h2>
        <p className="text-base text-justify">
          Nuestros servicios se enfocan en el desarrollo web y software
          personalizado para diferentes tipos de negocios e empresas. Nos
          especializamos en crear soluciones a medida que se adapten
          perfectamente a las necesidades de tu negocio. Ya sea que estés
          buscando una página web moderna y funcional o un software específico
          para optimizar tus procesos internos, estamos aquí para ayudarte.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-10">
        <div className="flex-col items-center justify-center flex ">
          <img
            src={comercial}
            alt="persona"
            className="w-3/4 h-4/5 md:w-2/4 md:h-4/5 hover:scale-110 rounded "
          ></img>
          <p className="mt-3">SOFTWARE COMERCIAL</p>
        </div>
        <div className="flex-col items-center justify-center flex ">
          <img
            src={facturacion}
            alt="persona"
            className="w-3/4 h-4/5 md:w-2/4 md:h-4/5 hover:scale-110 rounded "
          ></img>
          <p className="mt-3">SISTEMAS DE FACTURACION</p>
        </div>

        <div className="flex-col items-center justify-center flex ">
          <img
            src={software}
            alt="persona"
            className="w-3/4 h-4/5 md:w-2/4 md:h-4/5 hover:scale-110 rounded "
          ></img>
          <p className="mt-3">DESARROLLO DE SOFTWARE</p>
        </div>
        <div className="flex-col items-center justify-center flex ">
          <img
            src={web}
            alt="persona"
            className="w-3/4 h-4/5 md:w-2/4 md:h-4/5 hover:scale-110 rounded "
          ></img>
          <p className="mt-3">DESARROLLO DE PAGINAS WEB</p>
        </div>
      </div>
      <div className="bg-[#0F172A] bg-fondo-color ">
        <div className="space-y-4 mx-10 mt-10">
          <h2 className="text-4xl text-[#2C928D]">
            Procedimiento para adquirir nuestros servicios
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 my-20 mx-10 md:mx-20 text-center">
          <div className="bg-[#0F172A] opacity-100 border border-solid border-[#ffff] rounded p-10 space-y-4 hover:scale-110">
            <h5 className="text-2xl text-[#2C928D]">Contactanos</h5>
            <h3 className="text-4xl text-[#2C928D]">Paso</h3>
            <h3 className="text-4xl text-[#2C928D]">1</h3>
            <p className="text-sm text-[#DAF7F4]">
              Póngase en contacto con nosotros a través de nuestro sitio web,
              correo electrónico o número de teléfono. Proporcione información
              básica sobre su proyecto y su interés en nuestros servicios.
            </p>
          </div>
          <div className="bg-[#0F172A] opacity-100 border border-solid border-[#ffff] rounded p-10 space-y-4 hover:scale-110">
            <h5 className="text-2xl text-[#2C928D]">Habla con nosotros</h5>
            <h3 className="text-4xl text-[#2C928D]">Paso</h3>
            <h3 className="text-4xl text-[#2C928D]">2</h3>
            <p className="text-sm text-[#DAF7F4]">
              Programaremos una reunión para discutir sus necesidades y
              objetivos en detalle. Durante esta etapa, analizaremos los
              requisitos del proyecto, resolverán dudas y brindarán
              asesoramiento.
            </p>
          </div>
          <div className="bg-[#0F172A] opacity-100 border border-solid border-[#ffff] rounded p-10 space-y-4 hover:scale-110">
            <h5 className="text-2xl text-[#2C928D]">Evaluación y propuesta</h5>
            <h3 className="text-4xl text-[#2C928D]">Paso</h3>
            <h3 className="text-4xl text-[#2C928D]">3</h3>
            <p className="text-sm text-[#DAF7F4]">
              Después de comprender sus necesidades, evaluaremos la viabilidad
              del proyecto y elaboraremos una propuesta personalizada que
              incluya el alcance del trabajo, la estimación de tiempo y costo,
              así como los términos y condiciones.
            </p>
          </div>
          <div className="bg-[#0F172A] opacity-100 border border-solid border-[#ffff] rounded p-10 space-y-4 hover:scale-110">
            <h5 className="text-2xl text-[#2C928D]">Iniciamos el proyecto</h5>
            <h3 className="text-4xl text-[#2C928D]">Paso</h3>
            <h3 className="text-4xl text-[#2C928D]">4</h3>
            <p className="text-sm text-[#DAF7F4]">
              Si está satisfecho con nuestra propuesta, formalizaremos el
              acuerdo y daremos inicio al desarrollo de su software, llevaremos
              a cabo el proyecto según los plazos acordados y garantizar su
              satisfacción con el producto final.
            </p>
          </div>
        </div>
      </div>
      <Baner></Baner>
    </section>
  );
};
