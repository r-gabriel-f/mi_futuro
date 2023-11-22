import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export const Contactos = () => {
  const [nombre, setNombre] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/send-email", {
        nombre,
        from,
        subject,
        text,
        telefono,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡El correo electrónico se envió correctamente!",
        showConfirmButton: false,
        timer: 3000,
      });

      setNombre("");
      setFrom("");
      setSubject("");
      setText("");
      setTelefono("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col mt-16">
      <div
        id="whatsapp-float"
        className="fixed bottom-1 right-4 bg-[#25d366] py-2 px-2 rounded-full cursor-pointer "
      >
        <a href="https://wa.link/nf9ygt" target="_banks">
          <ion-icon
            name="logo-whatsapp"
            class="w-10 h-10 text-[#ffff] hover:scale-110"
          ></ion-icon>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-10">
        <div className="flex flex-col my-auto">
          <h2 className="text-center text-4xl font-serif text-black">
            Contáctanos
          </h2>
          <div className="m-5 text-justify">
            <p>
              Por favor, complete el siguiente formulario para establecer
              contacto con nosotros. Estamos aquí para atender cualquier
              pregunta que pueda surgir.
            </p>
            <p>
              Además, tiene la opción de comunicarse a través del siguiente
              número telefónico o correo electrónico:
            </p>
          </div>
          <div class="grid grid-cols-1 mx-5 md:grid-cols-2 md:gap-x-8">
            <div class="flex mb-4 md:mb-0 justify-center">
              <ion-icon
                name="call-outline"
                class="w-10 h-10 text-[#0F172A] mr-4 md:mr-10"
              ></ion-icon>
              <p class="text-sm md:text-base">+591 70422955</p>
            </div>
            <div class="flex justify-center">
              <ion-icon
                name="mail-outline"
                class="w-10 h-10 text-[#0F172A] mr-4 md:mr-10"
              ></ion-icon>
              <p class="text-sm md:text-base">flowsoft.bo@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-auto">
          <form onSubmit={handleSubmit} className="mx-10 mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-6">
                <label
                  htmlFor="nombre"
                  className="block mb-2 font-medium text-black"
                >
                  Nombre
                </label>
                <input
                  type="nombre"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="text-sm w-full p-2.5 bg-[#0F172A] rounded-md text-[#DAF7F4]"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="telefono"
                  className="block mb-2 font-medium text-black"
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  value={telefono}
                  onChange={(e) => {
                    const onlyNums = e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 8);
                    setTelefono(onlyNums);
                  }}
                  className="text-sm w-full p-2.5 bg-[#0F172A] rounded-md text-[#DAF7F4]"
                  required
                ></input>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="text-sm w-full p-2.5 bg-[#0F172A] rounded-md text-[#DAF7F4]"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="asunto"
                  className="block mb-2 font-medium text-black"
                >
                  Asusto
                </label>
                <input
                  type="asunto"
                  id="asunto"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="text-sm w-full p-2.5 bg-[#0F172A] rounded-md text-[#DAF7F4]"
                  required
                ></input>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="mensaje"
                className="block mb-2 font-medium text-black"
              >
                Mensaje
              </label>
              <textarea
                type="mensaje"
                id="mensaje"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="shadow-sm text-sm w-full p-2.5 bg-[#0F172A] rounded-md text-[#DAF7F4]"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-[#0F172A] font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4301615593163!2d-66.25621702583851!3d-17.391132164294156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e30bb791626eb3%3A0x7d67a6d449fc6484!2sFlowSoft!5e0!3m2!1ses!2sbo!4v1691766536709!5m2!1ses!2sbo"
          className="gmap_iframe w-full h-screen"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Embedded View"
        ></iframe>
      </div>
    </section>
  );
};
