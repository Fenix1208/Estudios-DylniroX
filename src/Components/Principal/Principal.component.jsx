import React, { useState, useEffect } from "react";
import "./Principal.css";
import background from "../Img/FondoCDWeb2.png";

const Principal = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Estudios DylniroX™",
    "DylniroX Software™",
    "DylniroX Video™",
    "DylniroX Desing™",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main-page-principal">
      <div className="overlay-background"></div>
      <div className="div-inicio">
        <div className="div-container-textox-inicio">
          <h1 className="main-title">Cardinal de DyX</h1>
          <p className="sub-text">{texts[textIndex]}</p>
        </div>
      </div>
      <div className="div-destacados-principal">
        <h2 className="destacados-title">Destacados</h2>
        <ul className="destacados-list">
          <li>OblioN Tycons Software™</li>
          <li>K`oóben Inventario</li>
          <li>K`aátik Software</li>
          <li>ThoughtTrail™</li>
          <li>Cardinal de DyX</li>
        </ul>
      </div>
    </div>
  );
};

export default Principal;