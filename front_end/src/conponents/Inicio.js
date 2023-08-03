import React, { useEffect } from "react";
import persona from "../assets/img/persona.png";
import { Nosotros } from "./Nosotros";
export const Inicio = () => {


  useEffect(() => {
    const handleScroll = () => {
      const whatsappFloat = document.getElementById('whatsapp-float');
      if (Math.max(window.scrollY) > 0) {
        whatsappFloat.style.display = 'block';
      } 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="bg-[] relative mt-16">
      <div id="whatsapp-float" className="fixed bottom-1 right-4 bg-[#25d366] py-2 px-2 rounded-full cursor-pointer ">
        <ion-icon name="logo-whatsapp" class="w-10 h-10 text-[#ffff] hover:scale-110"></ion-icon>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen w-full">
        <div className="flex items-center justify-center flex-col m-10">
          <h1 className="text-5xl font-serif text-justify">
            Realiza tu software y lleva tu negocio al siguiente nivel con
            soluciones innovadoras y a medida.
          </h1>
          <button class="bg-[#0F172A] text-white font-bold py-2 px-4 rounded-full mt-10">
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
