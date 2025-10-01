import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function Type() {
  // 1. Estado para almacenar el idioma actual de la página
  const [currentLang, setCurrentLang] = useState('es');

  // 2. useEffect para observar los cambios en la etiqueta <html>
  useEffect(() => {
    // Función mejorada para determinar el idioma
    const getLang = () => {
      const langAttr = document.documentElement.lang || 'es';
      // Lógica corregida: Si el idioma es 'en', usa inglés. Si no, usa español.
      return langAttr.startsWith('en') ? 'en' : 'es';
    };

    // Establece el idioma inicial al cargar el componente
    setCurrentLang(getLang());

    // Crea un observador que vigila los cambios en los atributos del <html>
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
          // Actualiza el estado con el nuevo idioma cada vez que cambie
          setCurrentLang(getLang());
        }
      });
    });

    // Empieza a observar la etiqueta <html>
    observer.observe(document.documentElement, { attributes: true });

    // Limpia el observador cuando el componente se desmonte para evitar fugas de memoria
    return () => observer.disconnect();
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  // Define los textos para ambos idiomas
  const spanishStrings = [
    "Desarrollador Web",
    "Desarrollador de Videojuegos",
    "Desarrollador de Aplicaciones Móviles",
    "Desarrollador de Software de Escritorio",
  ];

  const englishStrings = [
    "Web Developer",
    "Game Developer",
    "Mobile App Developer",
    "Desktop Software Developer",
  ];

  // Elige el conjunto de textos basado en el estado actual
  const stringsToShow = currentLang === 'es' ? spanishStrings : englishStrings;

  return (
    <div translate="no">
      {/* 3. Se añade una 'key' que cambia con el idioma. */}
      {/* Esto fuerza a Typewriter a reiniciarse completamente con los nuevos textos. */}
      <Typewriter
        key={currentLang} // ¡Este es el truco clave!
        options={{
          strings: stringsToShow,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;