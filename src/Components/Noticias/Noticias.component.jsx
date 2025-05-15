import React, { useState, useEffect } from "react";
import "./Noticias.css";
import ContenidoNoticia from "./ContenidoNoticia.component";
import Avances from "./Avances.component";

import N1 from "../Noticias Img/NoticiaCD.png";
import N2 from "../Noticias Img/QuillNoteFamilia.png";
import N3 from "../Noticias Img/LunaHarmonyNoticia.png";
import N4 from "../Noticias Img/2_0CardinalDyXWeb.png";
import N5 from "../Noticias Img/PromocionMaya.png";

const images = [
  { src: N1, alt: "Noticia Cardinal de DyX" },
  { src: N2, alt: "Quill Note Familia" },
  { src: N3, alt: "Luna Harmony" },
  { src: N4, alt: "Cardinal de DyX Web 2.0" },
  { src: N5, alt: "Promoción Maya" },
];

const Noticias = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
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
      <section className="carousel-section">
        <h1 className="section-title">Mural de destacados</h1>
        <p className="section-subtitle">
          Explora nuestras últimas novedades visuales
        </p>
        <div className="carousel">
          <button
            className="carousel-btn prev"
            onClick={handlePrevImage}
            aria-label="Imagen anterior"
          >
            &larr;
          </button>
          <img
            className="carousel-image"
            src={images[currentImage].src}
            alt={images[currentImage].alt}
          />
          <button
            className="carousel-btn next"
            onClick={handleNextImage}
            aria-label="Imagen siguiente"
          >
            &rarr;
          </button>
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  index === currentImage ? "active" : ""
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`Ir a imagen ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="avances-section">
        <h2 className="section-title">Avances</h2>
        <div className="contenedor-difucion">
          <Avances
            encabezado="Actualizacion MAYOR en proceso"
            fecha="14/05/2025"
            estado="Implementación"
            contenido={
              "Muchas cosas están cambiando, y queremos probarlas con ustedes. \nCardinal de DyX WEB está siendo actualizado en varios de sus apartados, con mejoras que van desde el diseño hasta nuevas características que brindarán una experiencia optimizada en UI y UX. \n" +
              "Realizaremos modificaciones periódicas hasta cubrir todas las vistas del sitio. Así que, si notas que algo no funciona correctamente, no te preocupes, lo solucionaremos de inmediato.\n" +
              "¡Gracias por tu comprensión y apoyo! Estamos emocionados de compartir estas mejoras contigo. ¡Mantente atento a las novedades!"
            }
          />
          <Avances
            encabezado="Nuevos Lanzamientos"
            fecha="02/05/2025"
            estado="Pruebas"
            contenido={
              "¡Descubre nuestras nuevas creaciones! Hemos lanzado dos innovadores sistemas:\n" +
              "📌 Quill Note, una aplicación intuitiva y elegante para tomar notas, ahora disponible en Android.\n" +
              "🎵 LunaHarmony, un sofisticado widget para el control de música, que combina funcionalidad y diseño armonioso.\n" +
              "Explora estas novedades en el mural de aplicaciones y lleva tu productividad y experiencia musical al siguiente nivel. ¡No te lo pierdas!"
            }
          />
          <Avances
            encabezado="Nueva actualización"
            fecha="04/01/2025"
            estado="Demo"
            contenido={
              "ThoughtTrail se actualiza a la versión 1.4 recibiendo cambios en su código principal para incluir Quill Note como nuevo sistema heredado. " +
              "Aprovecha las nuevas características y mejoras en UI y UX en la versión 2.0 de ThoughtTrail y Quill Note disponibles ahora. Descárgalo como socio de software EXCLUSIVO."
            }
          />
          
        </div>
      </section>

      <section className="noticias-section">
        <h2 className="section-title">
          Últimas transformaciones en el entorno
        </h2>
        <div className="contenedor-difucion">
          <ContenidoNoticia
            encabezado="Cardinal de DyX | WEB: Versión 2.2"
            fecha="14/05/2025"
            contenido={
              "Nuevo diseño y colores: Hemos actualizado la paleta de colores a tonos más oscuros y ajustado algunos elementos de texto y contenedores para mejorar la estética y la legibilidad.\n" +
              "Nuevos datos en Mural: Hemos realizado cambios en las tarjetas de sistemas del mural, reorganizado los elementos y añadido el año de finalización de cada proyecto. Ahora, al colocar el cursor sobre una imagen, se mostrará el año en que se lanzó la primera versión del sistema.\n" +
              "Cambios en Inicio: Hemos renovado la presentación de la página de inicio de Cardinal, mejorando el diseño del menú de navegación y los sistemas destacados. Sin embargo, aún no se ha implementado un menú móvil rediseñado.\n"+
              "Cambios en Noticias: Hemos optimizado el apartado de noticias, incluyendo ajustes en el carrusel de imágenes y en la organización de las noticias para una mejor experiencia de lectura."
            }
          />
          <ContenidoNoticia
            encabezado="Cardinal de DyX | WEB: Versión 2.1"
            fecha="02/05/2025"
            contenido={
              "Explora el universo visual de nuestros proyectos 🎥✨\n" +
              "Ahora puedes acceder a los videos de la mayoría de nuestras creaciones. Sumérgete en el video de promoción más reciente, donde abordamos las actualizaciones más importantes, o revisa los videos de presentación de nuestros sistemas Legacy, que muestran su evolución y esencia.\n" +
              "Descubre mucho más que imágenes y descripciones. Vive la experiencia a través de cada detalle."
            }
          />
          <ContenidoNoticia
            encabezado="Cardinal de DyX | WEB: Versión 2.0"
            fecha="10/10/2024"
            contenido={
              "Bienvenidos a la versión 2.0 de Cardinal de DyX. Descubre nuestro renovado sitio, ahora con un elegante color de fondo, animaciones sofisticadas y características innovadoras.\n" +
              "En esta actualización, destacamos el rediseño integral de nuestro muestrario, que ha sido optimizado para ofrecer una experiencia más fluida y atractiva al mostrar nuestras aplicaciones. Además, hemos mejorado la manera de consultar información, lo que resulta en un rendimiento superior del sitio y una experiencia de usuario inigualable.\n" +
              "Estamos entusiasmados de presentarte este nuevo diseño. Explora con nosotros y contemplemos juntos un horizonte lleno de posibilidades."
            }
          />
          <ContenidoNoticia
            encabezado="Cardinal de DyX | WEB: Versión 1.9"
            fecha="16/08/2024"
            contenido={
              "Menú de navegación en pantalla:\n" +
              "Hemos actualizado el diseño del menú de navegación para que sea menos intrusivo y más atractivo. Ahora, cuando el cursor se coloca sobre él, aparece un efecto traslúcido.\n" +
              "Menú para dispositivos móviles:\n" +
              "Hemos optimizado el diseño del menú para dispositivos móviles, permitiendo que cada botón se ajuste correctamente al ancho y alto de la ventana.\n" +
              "Corrección en la página de información para móviles:\n" +
              "Corregimos la posición de la información en la página de móviles, que antes estaba demasiado abajo en comparación con otras secciones.\n" +
              "Cambios generales:\n" +
              "Agregamos transiciones a varios componentes y actualizamos el diseño del nombre del sitio en la página de inicio.\n" +
              "Estos cambios están disponibles en la versión 1.9 del sitio. ¡Esperamos que te gusten! Seguimos trabajando para mejorar. ¡Sigamos mirando las estrellas juntos!"
            }
          />
          <ContenidoNoticia
            encabezado="Cardinal de DyX | WEB: Versión 1.7"
            fecha="29/06/2024"
            contenido={
              "Novedades en la sección de noticias:\n" +
              "Hemos implementado un nuevo apartado para compartir las últimas novedades que están ocurriendo en DylniroX™. En este espacio, encontrarás información sobre los sistemas que estamos preparando para lanzar, las actualizaciones o parches que hemos publicado y los eventos relevantes en Estudios DylniroX™.\n" +
              "Además, hemos renovado el diseño del sitio; esperamos que te guste. Aunque esta actualización no trae muchos cambios, los hemos realizado con el objetivo de mejorar la experiencia.\n" +
              "¡Esperamos regresar pronto! Mientras tanto, nos aventuraremos a mirar las estrellas. ¡Hasta pronto!"
            }
          />
          <ContenidoNoticia
            encabezado="Cardinal de DyX | WEB: Versión 1.5.1"
            fecha="28/04/2024"
            contenido={
              "Nueva Sección: Eventos\n" +
              "Bienvenidos a la sección de eventos, donde encontrarás acontecimientos que están ocurriendo en este momento o están por suceder. Estos eventos están diseñados para interactuar con los usuarios de PyX.\n" +
              "¿Qué tipos de eventos participan?\n" +
              "Liberación de Sistemas en Fase BETA: Aquí incluimos demos o pruebas de sistemas que están a punto de ser lanzados. También abarcamos aquellos sistemas que ya están en proceso de lanzamiento y queremos ofrecer beneficios adicionales a quienes los adquieran desde el primer momento.\n" +
              "¿Qué evento está activo hoy?\n" +
              "Hoy, te presentamos el evento de Lirix™, la tienda de aplicaciones desarrollada por DylniroX Software™ y Azulados y Asociados Corp. ¡Descubre de qué se trata y echa un vistazo a la sección!\n" +
              "Cambios en la adaptación a pantallas:\n" +
              "Corregimos un error de redimensión para dispositivos móviles de la sección “Información del sitio”.\n" +
              "Se ajustó la marca de agua del estudio que aparece en la parte inferior de cada ventana.\n" +
              "Por el momento, estos son los cambios que han llegado ¡Gracias por tu tiempo y retroalimentación, esperamos que disfrutes de las mejoras!"
            }
          />
          <ContenidoNoticia
            encabezado="Cardinal de DyX | WEB: Versión 1.4"
            fecha="18/03/2024"
            contenido={
              "Nuevos cambios llegaron.\n" +
              "Con esta actualización, hemos agregado al muestrario nuevas previsualizaciones de algunas de nuestras aplicaciones y realizado correcciones en textos e imágenes.\n" +
              "Corrección Ortográfica:\n" +
              "Hemos realizado correcciones ortográficas en algunas secciones de la página, así como en algunas imágenes.\n" +
              "Muestrario:\n" +
              "Hemos recibido un nuevo banco de sistemas que ahora podrás previsualizar en el muestrario, mientras seguimos agregando más sistemas con el tiempo. También hemos agregado etiquetas sobre aquellos sistemas que han sido desarrollados en colaboración con otros compañeros.\n" +
              "Cambios en la adaptación a pantallas:\n" +
              "Hemos alineado los cuadros de información de la sección de “Familia DyX” en dispositivo móviles.\n" +
              "Con estos cambios, presentamos la versión 1.4 de Cardinal de Dylnirox. ¡Gracias por tu tiempo y retroalimentación, esperamos que disfrutes de las mejoras!"
            }
          />
          <ContenidoNoticia
            encabezado="Cardinal de DyX | WEB: Versión 1.3"
            fecha="02/03/2024"
            contenido={
              "Una nueva actualización llega a Cardinal de Dylnirox.\n" +
              "Con esta actualización, hemos introducido una nueva sección y realizado mejoras en la experiencia para aquellos que nos visitan desde dispositivos móviles.\n" +
              "Cambios en la adaptación a pantallas:\n" +
              "Ahora nuestro sitio se redimensiona automáticamente cuando se accede desde un dispositivo móvil. Esto garantiza una visualización óptima sin importar el tamaño de la pantalla.\n" +
              "Nuevo menú vertical:\n" +
              "Hemos agregado un menú desplegable que se presenta de forma vertical. Esto facilita el acceso a las opciones y mejora la navegación para nuestros usuarios.\n" +
              "Mejoras en la visualización de información:\n" +
              "Los contenedores de las aplicaciones han sido modificados para permitir una lectura más cómoda. Ahora podrás deslizar el dedo para ver la información detallada de cada sistema.\n" +
              "Sección de noticias:\n" +
              "Hemos implementado una nueva sección llamada “Noticias”. En esta sección, encontrarás un resumen de las noticias más importantes que están sucediendo o están por suceder en Dylnirox. Además, incluiremos noticias pasadas en la parte inferior de esta sección.\n" +
              "Con estos cambios, presentamos la versión 1.3 de Cardinal de Dylnirox. ¡Gracias por tu tiempo y esperamos que disfrutes de las mejorasiguous!"
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Noticias;
