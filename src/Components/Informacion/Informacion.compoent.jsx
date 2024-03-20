import React, { useState, useEffect } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import "./Informacion.css";

const Informacion = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Estamos trabajando en este sitio y migrando información a el...",
    "Tu paciencia y retroalimentación son de gran valor.",
    "Mientras aguardamos, miremos estrellas juntos...",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="main-page">
      <div className="contenedor-encabezado">
        <h1>Maya y nuestro equipo te dan la bienvenida</h1>
        <p className="encabezado-parrafo">{texts[textIndex]}</p>
      </div>

      <Element name="contenido">
        <div className="content-container">
          <h1 className="h1-element">Información del Sitio.</h1>
          <p className="p-element">
            "Este sitio web fue desarrollado por DylniroX Software™ para Estudios
            DylniroX™ con el objetivo de ofrecer una previsualización de algunos
            de nuestros proyectos. Todo lo que se muestra en este sitio ha sido
            desarrollado por Estudios DylniroX™, en colaboración con DylniroX
            Software™ y otros colaboradores. Para obtener más información sobre
            los sistemas presentados aquí, es necesario acceder a Cardinal de
            DyX para Windows. Nuestra tienda de aplicaciones le permitirá
            conocer más acerca de estos sistemas, descubrir otros tantos mas y adquirir aquellos que estén
            disponibles."
          </p>
          <h1 className="h1-element">¿Escritorio y Web? </h1>
          <p className="p-element">
            Nuestro enfoque de desarrollo se centra en la interfaz de usuario
            (UI) y la experiencia del usuario (UX) en entornos de escritorio
            para Windows. Actualmente, no tenemos un enfoque específico
            destinado al desarrollo web."
          </p>
          <h1 className="h1-element">Contacto: estudiosdylnirox.mx@gmail.com</h1>
        </div>
      </Element>
    </div>
  );
};

export default Informacion;
