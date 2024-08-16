// Noticias.js

import React, { useState, useEffect } from "react";
import "./Noticias.css";
import ContenidoNoticia from "./ContenidoNoticia.component";
import Avances from "./Avances.component";

import N1 from "../Noticias Img/BannerCardinal.png";
import N2 from "../Noticias Img/PromocionApps.png";
import N3 from "../Noticias Img/PromocionMaya.png";
import N4 from "../Noticias Img/Banners.png";
import N5 from "../Noticias Img/ThoughtTrail.png";

const images = [
  N5,
  N1,
  N2,
  N3,
  N4,
  // Agrega más imágenes aquí
];

const Noticias = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Cambia la imagen cada 6 segundos
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="noticias-container">
      <div>
        <h1>Mural de destacados</h1>
        <p>Estamos realizando cambios.</p>
      </div>
      <img
        className="img-noticias"
        src={images[currentImage]}
        alt={`Noticia ${currentImage + 1}`}
      />
      <div className="buttons">
        <button className="btnOPC" onClick={handlePrevImage}>
          Anterior
        </button>
        <button className="btnOPC" onClick={handleNextImage}>
          Siguiente
        </button>
      </div>

      <h1 className="Noticias-encabezado">Avances.</h1>

      <div className="contenedor-difucion">
      <Avances
          encabezado="Nuevo lanzamiento de software"
          fecha="23/07/2024"
          estado="Demo"
          contenido={
            "ThoughtTrail™ ha llegado a DylnrioX, nuestra primera aplicación para uso local sin conexión a bases de datos. Está disponible exclusivamente para nuestros usuarios de software. Se trata de un sistema " +
            "simple pero directo para la elaboración y almacenamiento de notas, diseñado para dar seguimiento y orden a tus ideas. Descárgalo como socio de software EXCLUSIVO."
          }
        />
        <Avances
          encabezado="Presentación de Software 2024"
          fecha="29/06/2024"
          estado="Postergado"
          contenido={
            "Nos complace informar que actualmente nuestros equipos se encuentran desarrollando sistemas para terceros. Debido a esta prioridad, hemos decidido posponer nuestro evento de presentación de software 2024 hasta nuevo aviso. Esperamos que esta decisión nos permita mostrar aún más sistemas en dicha presentación." +
            " \nGracias por tu tiempo, prometemos regresar."
          }
        />
        <Avances
          encabezado="Evento de Verano en OTS"
          fecha="30/05/2024"
          estado="Finaliza el 10/08/2024"
          contenido={
            "¡Regresa el evento de verano a OblioN Tycons Software en su Edición Reliquia! Por tiempo limitado, adquiere tantas runas como desees a precios rebajados. Es el momento ideal para mejorar tus invocaciones. ¡Aprovecha estas ofertas antes de que se vayan por un año más!"
          }
        />
        <Avances
          encabezado="Ecosistema de Lirix™"
          fecha="24/05/2024"
          estado="Finalizado"
          contenido={
            "Dylnirox Software™, en colaboración con Azulados y Asociados S.A de C.V, trae de regreso a Lirix Store™. Ahora, con una serie de complementos destinados tanto a clientes como a desarrolladores. Además, hemos rediseñado las interfaces de Lirix Store™, implementado mejoras de rendimiento y añadido nuevas funcionalidades para brindar una experiencia más confortable a nuestros clientes." +
            " Con estos cambios, damos la bienvenida al Ecosistema de Lirix™ y marcamos una nueva ruta de desarrollo para esta serie de sistemas."
          }
        />
      </div>

      <h1 className="Noticias-encabezado">
        Últimas transformaciones en el entorno.
      </h1>

      <div className="contenedor-difucion">
        <ContenidoNoticia
          encabezado="Cardinal de DyX | WEB: Versión 1.9"
          fecha="16/08/2024"
          contenido={
            "Menú de navegación en pantalla: \n" +
            "Hemos actualizado el diseño del menú de navegación para que sea menos intrusivo y más atractivo. Ahora, cuando el cursor se coloca sobre él, aparece un efecto traslúcido." +
            "\nMenú para dispositivos móviles: \n" +
            "Hemos optimizado el diseño del menú para dispositivos móviles, permitiendo que cada botón se ajuste correctamente al ancho y alto de la ventana." +
            "\nCorrección en la página de información para móviles: \n" +
            "Corregimos la posición de la información en la página de móviles, que antes estaba demasiado abajo en comparación con otras secciones." +
            "\nCambios generales: \n" +
            "Agregamos transiciones a varios componentes y actualizamos el diseño del nombre del sitio en la página de inicio." +
            "\n\nEstos cambios están disponibles en la versión 1.9 del sitio. ¡Esperamos que te gusten! Seguimos trabajando para mejorar. ¡Sigamos mirando las estrellas juntos!"
          }
        />
        <ContenidoNoticia
          encabezado="Cardinal de DyX | WEB: Versión 1.7"
          fecha="29/06/2024"
          contenido={
            "Novedades en la sección de noticias: \n" +
            "Hemos implementado un nuevo apartado para compartir las últimas novedades que están ocurriendo en DylniroX™. En este espacio, " +
            "encontrarás información sobre los sistemas que estamos preparando para lanzar, las actualizaciones o parches que hemos publicado y los eventos relevantes en Estudios DylniroX™." +
            " Además, hemos renovado el diseño del sitio; esperamos que te guste. \nAunque esta actualización no trae muchos cambios, " +
            "los hemos realizado con el objetivo de mejorar la experiencia. " +
            "\n¡Esperamos regresar pronto! Mientras tanto, nos aventuraremos a mirar las estrellas. ¡Hasta pronto!"
          }
        />
        <ContenidoNoticia
          encabezado="Cardinal de DyX | WEB: Versión 1.5.1"
          fecha="28/04/2024"
          contenido={
            "Nueva Sección: Eventos\n" +
            "Bienvenidos a la sección de eventos, donde encontrarás acontecimientos que están ocurriendo en este momento o están por suceder. Estos eventos están diseñados para interactuar con los usuarios de DyX.\n\n" +
            "¿Qué tipos de eventos participan?\n" +
            "Liberación de Sistemas en Fase BETA: Aquí incluimos demos o pruebas de sistemas que están a punto de ser lanzados. También abarcamos aquellos sistemas que ya están en proceso de lanzamiento y queremos ofrecer beneficios adicionales a quienes los adquieran desde el primer momento.\n\n" +
            "¿Qué evento está activo hoy?\n" +
            "Hoy, te presentamos el evento de Lirix™, la tienda de aplicaciones desarrollada por DylniroX Software™ y Azulados y Asociados Corp. ¡Descubre de qué se trata y echa un vistazo a la sección! \n\n" +
            "Cambios en la adaptación a pantallas:\n" +
            "Corregimos un error de redimensión para dispositivos móviles de la sección “Información del sitio”.  \n\n" +
            "Se ajustó la marca de agua del estudio que aparece en la aparte inferior de cada ventana. \n\n" +
            "Por el momento, estos son los cambios que han llegado ¡Gracias por tu tiempo y retroalimentación,  esperamos que disfrutes de las mejoras!"
          }
        />
        <ContenidoNoticia
          encabezado="Cardinal de DyX | WEB: Versión 1.4"
          fecha="18/03/2024"
          contenido={
            "Nuevos cambios llegaron.\n" +
            "Con esta actualización, hemos agregado al muestrario nuevas previsualizaciones de algunas de nuestras aplicaciones y realizado correcciones en textos e imágenes.\n\n" +
            "Corrección Ortográfica:\n" +
            "Hemos realizado correcciones ortográficas en algunas secciones de la página, así como en algunas imágenes.\n\n" +
            "Muestrario:\n" +
            "Hemos recibido un nuevo banco de sistemas que ahora podrás previsualizar en el muestrario, mientras seguimos agregando más sistemas con el tiempo. También hemos agregado etiquetas sobre aquellos sistemas que han sido desarrollados en colaboración con otros compañeros. \n\n" +
            "Cambios en la adaptación a pantallas:\n" +
            "Hemos alineado los cuadros de información de la sección de “Familia DyX” en dispositivo móviles. \n\n" +
            "Con estos cambios, presentamos la versión 1.4 de Cardinal de Dylnirox. ¡Gracias por tu tiempo y retroalimentación,  esperamos que disfrutes de las mejoras!"
          }
        />
        <ContenidoNoticia
          encabezado="Cardinal de DyX | WEB: Versión 1.3"
          fecha="02/03/2024"
          contenido={
            "Una nueva actualización llega a Cardinal de Dylnirox.\n" +
            "Con esta actualización, hemos introducido una nueva sección y realizado mejoras en la experiencia para aquellos que nos visitan desde dispositivos móviles.\n\n" +
            "Cambios en la adaptación a pantallas:\n" +
            "Ahora nuestro sitio se redimensiona automáticamente cuando se accede desde un dispositivo móvil. Esto garantiza una visualización óptima sin importar el tamaño de la pantalla.\n\n" +
            "Nuevo menú vertical:\n" +
            "Hemos agregado un menú desplegable que se presenta de forma vertical. Esto facilita el acceso a las opciones y mejora la navegación para nuestros usuarios.\n\n" +
            "Mejoras en la visualización de información:\n" +
            "Los contenedores de las aplicaciones han sido modificados para permitir una lectura más cómoda. Ahora podrás deslizar el dedo para ver la información detallada de cada sistema.\n\n" +
            "Sección de noticias:\n" +
            "Hemos implementado una nueva sección llamada “Noticias”. En esta sección, encontrarás un resumen de las noticias más importantes que están sucediendo o están por suceder en Dylnirox. Además, incluiremos noticias pasadas en la parte inferior de esta sección.\n\n" +
            "Con estos cambios, presentamos la versión 1.3 de Cardinal de Dylnirox. ¡Gracias por tu tiempo y esperamos que disfrutes de las mejoras!"
          }
        />
      </div>
    </div>
  );
};

export default Noticias;
