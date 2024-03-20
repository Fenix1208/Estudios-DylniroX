import React, { useState, useEffect } from "react";
import "./Principal.css";
import background from '../Img/FondoCDWeb.png';

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

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="main-page-principal"
      style={{
        backgroundImage: `url(${background})`, 
        backgroundSize: "Cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="main-title">Cardinal de DyX</h1>
      <p className="sub-text">{texts[textIndex]}</p>
    </div>
  );
};

export default Principal;
