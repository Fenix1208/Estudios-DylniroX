// Noticias.js

import React, { useState, useEffect } from 'react';
import './Noticias.css'; // Importa tus estilos CSS
import ContenidoNoticia from './ContenidoNoticia.component';

import N1 from "../Noticias Img/BannerCardinal.png";
import N2 from "../Noticias Img/PromocionApps.png";
import N3 from "../Noticias Img/PromocionMaya.png";
import N4 from "../Noticias Img/Banners.png";

const images = [
  N1,
  N2,
  N3,
  N4
  // Agrega más imágenes aquí
];

const Noticias = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Cambia la imagen cada 6 segundos
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
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
      <img className='img-noticias' src={images[currentImage]} alt={`Noticia ${currentImage + 1}`} />
      <div className="buttons">
        <button className='btnOPC' onClick={handlePrevImage}>Anterior</button>
        <button className='btnOPC' onClick={handleNextImage}>Siguiente</button>
      </div>
      <div>
      <h1 className='Noticias-encabezado'>Difusión</h1>
        <ContenidoNoticia
        encabezado="Cardinal de DyX | WEB: Version 1.3"
        fecha="02/03/2024"
        contenido={
            "Una nueva actualización llega a Cardinal de Dylnirox.\n" +
            "Con esta actualización, hemos introducido una nueva sección y realizado mejoras en la experiencia para aquellos que nos visitan desde dispositivos móviles.\n\n"+
            
            "Cambios en la adaptación a pantallas:\n"+
            "Ahora nuestro sitio se redimensiona automáticamente cuando se accede desde un dispositivo móvil. Esto garantiza una visualización óptima sin importar el tamaño de la pantalla.\n\n"+
            
            "Nuevo menú vertical:\n"+
            "Hemos agregado un menú desplegable que se presenta de forma vertical. Esto facilita el acceso a las opciones y mejora la navegación para nuestros usuarios.\n\n"+
            
            "Mejoras en la visualización de información:\n"+
            "Los contenedores de las aplicaciones han sido modificados para permitir una lectura más cómoda. Ahora podrás deslizar el dedo para ver la información detallada de cada sistema.\n\n"+
            
            "Sección de noticias:\n"+
            "Hemos implementado una nueva sección llamada “Noticias”. En esta sección, encontrarás un resumen de las noticias más importantes que están sucediendo o están por suceder en Dylnirox. Además, incluiremos noticias pasadas en la parte inferior de esta sección.\n\n"+
            "Con estos cambios, presentamos la versión 1.3 de Cardinal de Dylnirox. ¡Gracias por tu tiempo y esperamos que disfrutes de las mejoras!"
          }/>
      </div>
    </div>
  );
};

export default Noticias;
