import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import "./Informacion.css";

const Informacion = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Estamos trabajando en este sitio y migrando información...",
    "Tu paciencia y retroalimentación son de gran valor.",
    "Mientras aguardamos, miremos estrellas juntos...",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main-page">
      <header className="contenedor-encabezado">
        <h1>Maya y nuestro equipo te dan la bienvenida</h1>
        <p className="encabezado-parrafo fade-in">{texts[textIndex]}</p>
      </header>

      <Element name="contenido">
        <div className="content-container">
          {[
            {
              title: "Información del Sitio",
              content: `Este sitio web fue desarrollado por DylniroX Software™ para 
              Estudios DylniroX™ con el objetivo de ofrecer una previsualización 
              de algunos de nuestros proyectos. Todo lo que se muestra ha sido 
              desarrollado por Estudios DylniroX™ en colaboración con DylniroX Software™ y otros colaboradores.`,
            },
            {
              title: "¿Escritorio y Web?",
              content: `Nuestro enfoque de desarrollo se centra en la interfaz de usuario (UI) 
              y la experiencia del usuario (UX) en entornos de escritorio para Windows.
              Actualmente, trabajamos en llevar nuestras experiencias a la Web con enfoque empresarial.`,
            },
            {
              title: "Nuestro desarrollador",
              content: `Todos los sistemas presentados en Cardinal de DyX, incluido el sitio web, 
              han sido desarrollados por Ruben Fabian Figueroa Garcia, egresado de Ingeniería 
              Informática con especialidad en Desarrollo de Software.
              Los sistemas creados en colaboración con otros desarrolladores están
              debidamente etiquetados e incluyen, en su descripción, el nombre del
              colaborador. Estudios Dylnirox™ y sus derivaciones son marcas en uso
              y utilizadas por RFFG como identidad visual para los sistemas que
              presentamos.`,
            },
          ].map((section, index) => (
            <section key={index}>
              <h1 className="h1-element">{section.title}</h1>
              <p className="p-element">{section.content}</p>
            </section>
          ))}
        </div>
      </Element>
    </div>
  );
};

export default Informacion;