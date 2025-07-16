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
        <h2 className="destacados-title">Eventos y destacados</h2>
        <ul className="destacados-list">
          <li
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=JIthOKW8ml8",
                "_blank"
              )
            }
          >
            Software 2023
          </li>
          <li
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=H3zNV-ZfaCc",
                "_blank"
              )
            }
          >
            Cardinal de DyX Desktop
          </li>
          <li
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=-x1DU84cZ_0",
                "_blank"
              )
            }
          >
            Software 2024
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Principal;
