import React, { useState } from "react";
import "./Aplicacion.css";

const Aplicacion = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  const hasVideo = props.video && props.video.trim() !== ""; // Validación de video

  return (
    <div className="contenedor-general-apps">
      <div
        className="image-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={props.background} alt={props.alt || "Aplicación"} />
        {showOverlay && (
          <div className="overlay">
            <div className="data-container">
              <p className="fecha">{props.fecha || "Sin fecha"}</p>
            </div>
          </div>
        )}
      </div>
      <button
        className="btn-consulta-video"
        onClick={hasVideo ? () => window.open(props.video, "_blank") : undefined}
        aria-label={hasVideo ? "Abrir video más reciente" : "Sin video disponible"}
        disabled={!hasVideo}
      >
        {hasVideo ? "Video más reciente" : "Sin video"}
      </button>
    </div>
  );
};

export default Aplicacion;