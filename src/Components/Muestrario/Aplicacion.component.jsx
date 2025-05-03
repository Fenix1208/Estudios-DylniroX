import React, { useState } from "react";
import "./Aplicacion.css";

const Aplicacion = (props) => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <div className="contenedor-general-apps" onClick={props.onClick}>
      <img
        src={props.background}
        alt="Imagen"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {props.video && props.video.trim() !== "" && (
        <button
          className="btn-consulta-video"
          onClick={() => window.open(props.video, "_blank")}
        >
          Video más nuevo
        </button>
      )}
    </div>
  );
};

export default Aplicacion;