import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador Web",
          "Desarrollador de Videojuegos",
          "Desarrollador de Aplicaciones Móviles",
          "Desarrollador de Software de Escritorio",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;