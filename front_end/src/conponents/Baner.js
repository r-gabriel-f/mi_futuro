import React from "react";
import { useNavigate } from "react-router-dom";

export const Baner = () => {
  const navigate = useNavigate(); 

  const redirectToContactos = () => {
    navigate("/contactos"); 
    window.scrollTo(0, 0);
  };
  return (
    <section className="h-screen w-full bg-baner bg-cover bg-center bg-fixed">
      <div className="flex flex-col justify-center items-center h-full ">
        <div className="bg-[#0F172A] opacity-70 border border-solid border-[#ffff] rounded p-10 text-center">
          <h2 className="text-5xl text-[#DAF7F4]">FlowSoft</h2>
          <button class="border border-solid border-[#DAF7F4] text-[#DAF7F4] font-bold py-2 px-4 rounded-full mt-10" onClick={redirectToContactos}>
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
};
