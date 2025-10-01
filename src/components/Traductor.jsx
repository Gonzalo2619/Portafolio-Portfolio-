import { useEffect } from 'react';

const GTranslateWidget = () => {
  useEffect(() => {
    // Configurar las settings antes de cargar el script
    window.gtranslateSettings = {
      default_language: 'es',
      detect_browser_language: true,
      languages: ['en', 'es'],
      wrapper_selector: '.gtranslate_wrapper',
      switcher_horizontal_position: 'right',
      switcher_vertical_position: 'bottom',
      flag_style: '3d',
      alt_flags: {
        en: 'usa',
      },
    };

    // Retrasar la carga del script (ejemplo: 2 segundos después de la carga)
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
      script.defer = true;
      document.body.appendChild(script);
    }, 2000); // Ajusta el tiempo según necesites (2000 ms = 2 segundos)

    // Limpiar el temporizador y el script al desmontar
    return () => {
      clearTimeout(timer);
      const script = document.querySelector('script[src="https://cdn.gtranslate.net/widgets/latest/float.js"]');
      if (script) document.body.removeChild(script);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslateWidget;