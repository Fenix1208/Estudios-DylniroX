import React, { useState } from "react";
import "./Aplicacion.css"; // Asegúrate de que esta importación sea correcta

const Aplicacion = (props) => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <div className="contenedor-general-apps" style={{ position: "relative" }}>
      <img
        src={props.background}
        alt="Imagen"
        style={{
          borderRadius: "10px", // Redondear la imagen
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Sombra oscura
          margin: "1px",
          width: "100%",
          height: "Auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className="contenedor-texto"
        style={{
          opacity: showText ? 1 : 0, // Mostrar el texto cuando el cursor está encima
          transition: "opacity 0.3s ease", // Transición suave
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          overflow: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="encabezado-app">{props.encabezado}</h1>
        <p className="parrafo-app">{props.parrafo}</p>
        <p className="descripcion-app">{props.descripcion}</p>
      </div>
    </div>
  );
};

export default Aplicacion;
