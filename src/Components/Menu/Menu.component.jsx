import { useState } from "react";
import "./Menu.css";

function Menu({ onPageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageChange = (page) => {
    onPageChange(page);
    setIsMenuOpen(false); // Cierra el menú en móviles al seleccionar
  };

  return (
    <nav className="top-menu">
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span className="menu-icon"></span>
      </button>
      <ul className={`menu-options ${isMenuOpen ? "open" : ""}`}>
        <li>
          <button
            className="menu-btn"
            onClick={() => handlePageChange("inicio")}
            aria-label="Ir a Inicio"
          >
            Inicio
          </button>
        </li>
        <li>
          <button
            className="menu-btn"
            onClick={() => handlePageChange("rffg")}
            aria-label="Ir a DEV"
          >
            .Net Developer
          </button>
        </li>
        <li>
          <button
            className="menu-btn"
            onClick={() => handlePageChange("muestrario")}
            aria-label="Ir a Muestrario"
          >
            Muestrario
          </button>
        </li>
        <li>
          <button
            className="menu-btn"
            onClick={() => handlePageChange("noticias")}
            aria-label="Ir a Noticias"
          >
            Noticias
          </button>
        </li>
        <li>
          <button
            className="menu-btn"
            onClick={() => handlePageChange("familia")}
            aria-label="Ir a Familia DyX"
          >
            Familia DyX
          </button>
        </li>
        <li>
          <button
            className="menu-btn"
            onClick={() => handlePageChange("informacion")}
            aria-label="Ir a Información del Sitio"
          >
            Información del Sitio
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
