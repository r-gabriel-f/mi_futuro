import React, { useEffect } from "react";
import persona from "../assets/img/persona.webp";
import nos from "../assets/img/dispositivos.webp";
import { Baner } from "./Baner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
export const Inicio = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const whatsappFloat = document.getElementById("whatsapp-float");
      if (Math.max(window.scrollY) > 0) {
        whatsappFloat.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const redirectToContactos = () => {
    navigate("/contactos");
    window.scrollTo(0, 0);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="relative mt-16">
      <div
        id="whatsapp-float"
        className="fixed bottom-1 right-4 bg-[#25d366] py-2 px-2 rounded-full cursor-pointer z-1"
      >
        <a href="https://wa.link/26678t" target="_banks">
          <ion-icon
            name="logo-whatsapp"
            class="w-10 h-10 text-[#ffff] hover:scale-110"
          ></ion-icon>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen w-full">
        <div className="flex items-center justify-center flex-col m-10">
          <h1 className="text-5xl font-serif text-justify">
            Potencia tu negocio al siguiente nivel con soluciones innovadoras y
            a medida.
          </h1>
          <h1 className="text-5xl font-serif text-justify">
            Realiza tu software con nosotros.
          </h1>
          <button
            className="bg-[#0F172A] text-white font-bold py-2 px-4 rounded-full mt-10"
            onClick={redirectToContactos}
          >
            Contactar
          </button>
        </div>
        <div className="flex items-center justify-center mt-auto">
          <img src={persona} alt="persona"></img>
        </div>
      </div>
      <div className="bg-[#0F172A] bg-fondo-color flex flex-col ">
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
            desarrollo de software, no solo por la calidad de nuestros
            productos, sino también por ser un referente en la promoción de la
            diversidad e inclusión en la industria tecnológica
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
                  <h6 className="text-lg text-[#2C928D]">
                    Enfoque personalizado
                  </h6>
                  <p className="mt-2 text-sm text-[#DAF7F4]">
                    Comprendemos que cada empresa tiene requisitos únicos y un
                    enfoque personalizado es esencial para desarrollar un
                    software exitoso. Trabajamos en estrecha colaboración con
                    nuestros clientes para entender sus objetivos y desafíos,
                    permitiéndonos ofrecer soluciones a medida que se ajusten
                    perfectamente a sus necesidades y presupuesto.
                  </p>
                </div>
              </div>

              <div className="flex ml-0 mt-10 md:ml-10 ">
                <div className="mr-2 md:mr-10">
                  <ion-icon
                    name="ribbon-outline"
                    className="w-10 h-10 text-[#2C928D]"
                  ></ion-icon>
                </div>
                <div className="text-justify  md:mr-20">
                  <h6 className="text-lg text-[#2C928D]">
                    Calidad y seguridad
                  </h6>
                  <p className="mt-2 text-sm text-[#DAF7F4]">
                    Nuestra prioridad es entregar software de alta calidad,
                    confiable y seguro. Seguimos rigurosos procesos de
                    desarrollo, pruebas y verificación para garantizar que el
                    producto final sea robusto y libre de errores. Además,
                    implementamos las mejores prácticas en materia de seguridad
                    para proteger sus datos y mantener la confidencialidad de su
                    negocio.
                  </p>
                </div>
              </div>

              <div className="flex ml-0 mt-10 md:ml-10 ">
                <div className="mr-2 md:mr-10">
                  <ion-icon
                    name="medical-outline"
                    className="w-10 h-10 text-[#2C928D]"
                  ></ion-icon>
                </div>
                <div className="text-justify md:mr-20">
                  <h6 className="text-lg text-[#2C928D]">Soporte continuo</h6>
                  <p className="mt-2 text-sm text-[#DAF7F4]">
                    Nuestra relación con el cliente no termina después de
                    entregar el software. Brindamos un soporte continuo para
                    asegurarnos de que el software funcione de manera óptima y
                    se mantenga actualizado en todo momento. Estamos disponibles
                    para resolver cualquier consulta, ofrecer capacitación y
                    realizar mejoras según sea necesario para asegurar la
                    satisfacción y el éxito a largo plazo de su empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 mx-10 mt-10">
          <h2 className="text-4xl text-[#2C928D]">
            Las tecnologias que utilizamos son:
          </h2>
          <div className="px-4 py-8">
            <Slider {...settings}>
              <div className="w-32 h-32 flex justify-center items-center">
                <ion-icon
                  name="logo-react"
                  class="w-32 h-32 text-[#DAF7F4] w-full"
                ></ion-icon>
              </div>
              <div className="w-32 h-32 flex justify-center items-center">
                <ion-icon
                  name="logo-nodejs"
                  class="w-32 h-32 text-[#DAF7F4] w-full"
                ></ion-icon>
              </div>
              <div className="w-32 h-32 flex justify-center items-center">
                <ion-icon
                  name="logo-laravel"
                  class="w-32 h-32 text-[#DAF7F4] w-full"
                ></ion-icon>
              </div>
              <div className="w-32 h-32 flex justify-center items-center">
                <ion-icon
                  name="logo-javascript"
                  class="w-32 h-32 text-[#DAF7F4] w-full"
                ></ion-icon>
              </div>
              <div className="w-32 h-32 flex justify-center items-center">
                <ion-icon
                  name="logo-html5"
                  class="w-32 h-32 text-[#DAF7F4] w-full"
                ></ion-icon>
              </div>
              <div className="w-32 h-32 flex justify-center items-center">
                <ion-icon
                  name="logo-css3"
                  class="w-32 h-32 text-[#DAF7F4] w-full"
                ></ion-icon>
              </div>
              <div className="w-32 h-32 flex justify-center items-center">
                <ion-icon
                  name="logo-docker"
                  class="w-32 h-32 text-[#DAF7F4] w-full"
                ></ion-icon>
              </div>
              <div className="w-32 h-32 flex justify-center items-center">
                <ion-icon
                  name="logo-figma"
                  class="w-32 h-32 text-[#DAF7F4] w-full"
                ></ion-icon>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Baner></Baner>
    </section>
  );
};
