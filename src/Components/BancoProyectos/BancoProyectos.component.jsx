import React, { useState } from "react";
import "../Img/PF1.png"; // Asegúrate de que la ruta a tu imagen sea correcta
import "./BancoProyectos.css";

const Banco = () => {
  const generateRandomText = () => {
    const texts = [
      "Proyecto A",
      "Proyecto B",
      "Proyecto C",
      "Proyecto D",
      "Proyecto E",
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  };

  const images = {
    proyectoA: "../Img/PF1.png",
    proyectoB: "../Img/PF1.png",
    proyectoC: "../Img/PF1.png",
    proyectoD: "../Img/PF1.png",
  };

  const [backgroundImage, setBackgroundImage] = useState(
    "../Img/PF1.png"
  );

  const handleBackgroundChange = (newImage) => {
    setBackgroundImage(newImage);
  };

  return (
    <div className="banco-container" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="encabezados-container">
        <h1 className="Encabezado">Descubre algunos de nuestros proyectos</h1>
        <p className="Sub-encabezado">
          Desarrollados en Visual Studio con C# y XAML.
        </p>
      </div>

      <div className="cuadros-container">
        {Object.keys(images).map((proyecto) => (
          <div
            key={proyecto}
            className="cuadro"
            onClick={() => handleBackgroundChange(images[proyecto])} // Cambio aquí
          >
            <h1>{generateRandomText()}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banco;
