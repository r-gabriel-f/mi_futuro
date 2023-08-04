import React from "react";

export const Contactos = () => {
  return (
    <section className="flex flex-col mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-10">
        <div className="flex flex-col my-auto">
          <h2 className="text-center text-4xl font-serif text-[#2C928D]">Contactanos</h2>
          <div className="mx-auto">
            <div className="flex  mt-10 ">
              <ion-icon
                name="call-outline"
                class="w-10 h-10 text-[#2C928D] mr-10"
              ></ion-icon>
              <p>+591 67440842</p>
            </div>
            <div className="flex  mt-10 ">
              <ion-icon
                name="mail-outline"
                class="w-10 h-10 text-[#2C928D]  mr-10"
              ></ion-icon>
              <p>r.gabriel.f@outlook.com</p>
            </div>
            <div className="flex  mt-10 ">
              <ion-icon
                name="compass-outline"
                class="w-10 h-10 text-[#2C928D] mr-10"
              ></ion-icon>
              <p>Av. Blanco galindo Km10</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-auto">
          <h2 className="text-center text-4xl font-serif text-[#2C928D]">Formulario</h2>
          <div className="">
            <form className="mx-10 mt-10">
              <div class="mb-6">
                <label for="nombre" class="block mb-2 font-medium text-[#2C928D]">
                  Nombres y Apellidos
                </label>
                <input
                  type="nombre"
                  id="nombre"
                  className="text-sm w-full p-2.5 bg-[#0F172A] rounded-md text-[#DAF7F4]"
                  required
                ></input>
              </div>
              <div class="mb-6">
                <label for="email" class="block mb-2 font-medium text-[#2C928D]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="text-sm w-full p-2.5 bg-[#0F172A] rounded-md text-[#DAF7F4]"
                  required
                ></input>
              </div>
              <div class="mb-6">
                <label for="telefono" class="block mb-2 font-medium text-[#2C928D]">
                  Telefono
                </label>
                <input
                  type="telefono"
                  id="telefono"
                  className="text-sm w-full p-2.5 bg-[#0F172A] rounded-md text-[#DAF7F4]"
                  required
                ></input>
              </div>
              <div class="mb-6">
                <label for="asunto" class="block mb-2 font-medium text-[#2C928D]">
                  Asusto
                </label>
                <input
                  type="asunto"
                  id="asunto"
                  className="text-sm w-full p-2.5 bg-[#0F172A] rounded-md text-[#DAF7F4]"
                  required
                ></input>
              </div>
              <div class="mb-6">
                <label for="mensaje" class="block mb-2 font-medium text-[#2C928D]">
                  Mensaje
                </label>
                <textarea
                  type="mensaje"
                  id="mensaje"
                  className="shadow-sm text-sm w-full p-2.5 bg-[#0F172A] rounded-md text-[#DAF7F4]"
                  required
                ></textarea>
              </div>

              <div class="flex justify-center">
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
      </div>
      <div className="w-full h-screen">
        <iframe
          title="Mapa del sitio"
          className="gmap_iframe w-full h-screen"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?amp;hl=en&amp;q=TECNOACERO S.R.L.&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
};
