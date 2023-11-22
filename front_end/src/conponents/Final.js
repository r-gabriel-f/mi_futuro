import React from "react";

export const Final = () => {
  var fechaActual = new Date();
  var añoActual = fechaActual.getFullYear();
  return (
    <section className="bg-[#0F172A] h-20">
      <div className="flex justify-center items-center h-full">
        <span className="text-zinc-50">
          Copyright © {añoActual} FlowSoft, All Rights Reserved.
        </span>
      </div>
    </section>
  );
};
