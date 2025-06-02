import React, { useState } from "react";
import "./MenuMobil.css";

function MenuMobil({ onPageChange }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (page) => {
    // Oculta el menú al hacer clic en una opción
    setShowMenu(false);
    // Llama a la función onPageChange con la página seleccionada
    onPageChange(page);
  };

  return (
    <nav className="top-menu-mobil">
      <button className="btnOPC-mobil-main" onClick={handleMenuClick}>
        Menú
      </button>
      {showMenu && (
        <ul className="menu-options-mobil">
          <li>
            <button
              className="btnOPC-mobil"
              onClick={() => handleOptionClick("inicio")}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              className="btnOPC-mobil"
              onClick={() => handleOptionClick("muestrario")}
            >
              Muestrario
            </button>
          </li>
          <li>
            <button
              className="btnOPC-mobil"
              onClick={() => handleOptionClick("noticias")}
            >
              Noticias
            </button>
          </li>
          <li>
            <button
              className="btnOPC-mobil"
              onClick={() => handleOptionClick("familia")}
            >
              Familia DyX
            </button>
          </li>
          <li>
            <button
              className="btnOPC-mobil"
              onClick={() => handleOptionClick("informacion")}
            >
              Información del Sitio
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default MenuMobil;
