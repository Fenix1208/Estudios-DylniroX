import React, { useState, useEffect } from "react";
import "./Principal.css";

const Principal = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Estudios DylniroX™",
    "DylniroX Software™",
    "DylniroX Video™",
    "DylniroX Desing™",
  ]; // Agrega los textos que quieras rotar

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="main-page"
      style={{
        backgroundImage: "url(/FondoCDWeb.png)",
        backgroundSize: "cover",
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
